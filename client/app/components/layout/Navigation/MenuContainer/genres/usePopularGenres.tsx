import { useQuery } from "react-query"
import { getGenreUrl } from '../../../../../configs/url.config';
import { IMenuItem } from "../menu.types";
import { GenreService } from "@/services/genre.service";


export const usePopularGenres = () => {
  const queryData = useQuery('popular genre menu', () => GenreService.getAll(), {
    select: ({ data }) => data.map(genre => ({
      icon: genre.icon,
      link: getGenreUrl(genre.slug)
    } as IMenuItem)).slice(0, 4)
  })
  return queryData
}