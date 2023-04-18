import { useQuery } from "react-query"
import { getGenreUrl } from '../../../../../configs/url.config';
import { IMenuItem } from "../menu.types";
import { GenreService } from "@/services/genre.service";
import { toastError } from "@/utils/api/withToastrErrorRedux";


export const usePopularGenres = () => {
  const queryData = useQuery('popular genres menu',
    () => GenreService.getPopularGenres(),
    {
      select: ({ data }) =>
        data.map((genre): IMenuItem => ({
          icon: genre.icon,
          link: getGenreUrl(genre.slug),
          title: genre.name,
        })
        ).splice(0, 4),
      onError(error) {
        toastError(error, 'Popular genres menu')
      },
    }
  )

  return queryData
}