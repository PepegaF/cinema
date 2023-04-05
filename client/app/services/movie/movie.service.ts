import { IMovie } from "shared/types/movie.types"
import { getMoviesUrl } from './../../config/api.config';
import { axiosClassic } from './../../api/interseptors';



export const MovieService = {
  async getMovies(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
      params: searchTerm
        ? { searchTerm }
        : {}
    })
  },
  async getMostPopularMovies() {
    const { data } = await axiosClassic.get<IMovie[]>(getMoviesUrl(`/most-popular`))
    return data
  }
}
