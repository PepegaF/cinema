import { getGenresUrl } from "@/configs/api.config"
import { axiosClassic } from "api/interceptors"
import { IGenre } from "shared/types/movie.types"
import axios from 'api/interceptors';
import { IGenreEditInput } from "@/components/screens/admin/user/user-edit.interface";


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
  async getById(_id: string) {
    return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
  },
  async update(_id: string, data: IGenreEditInput) {
    return axios.put<string>(getGenresUrl(`/${_id}`), data)
  },
  async getBySlug(slug: string) {
    return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
  },
  async getPopularGenres(limit: number = 4) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
      params: {
        limit,
      },
    })
  },
}