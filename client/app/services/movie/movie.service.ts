
import { getMoviesUrl } from "@/configs/api.config"
import { axiosClassic } from "api/interceptors"
import { IMovie } from "shared/types/movie.types"
import axios from 'api/interceptors';


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
  },
  async create() {
    return axios.post<string>(getMoviesUrl(''))
  },
  async delete(_id: string) {
    return axios.delete<string>(getMoviesUrl(`/${_id}`))
  },
}
