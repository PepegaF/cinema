import { getGenresUrl } from "@/configs/api.config"
import { axiosClassic } from "api/interceptors"
import { IGenre } from "shared/types/movie.types"
import axios from 'api/interceptors';


export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm
        ? { searchTerm }
        : {}
    })
  },
  async delete(_id: string) {
    return axios.delete<string>(getGenresUrl(`/${_id}`))
  },
  async create() {
    return axios.post<string>(getGenresUrl(''))
  },
}