import { getgenreUrl } from "config/url.config";
import { useQuery } from "react-query"
import { IMenuItem } from "../menu.interface";
import { GenreService } from './../../../../../services/genre.service';

export const usePopularGenres = () => {
  const queryData = useQuery('popular genre menu', () => GenreService.getAll(), {
    select: ({ data }) => data.map(genre => ({
      icon: genre.icon,
      link: getgenreUrl(genre.slug)
    } as IMenuItem)).slice(0, 4)
  })
  return queryData
}