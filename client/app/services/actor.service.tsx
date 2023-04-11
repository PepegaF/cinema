import { getActorsUrl } from "@/configs/api.config"
import { IActor } from "@/shared/types/movie.types";
import { axiosClassic } from "api/interceptors"
import axios from 'api/interceptors';


export const ActorService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IActor[]>(getActorsUrl(''), {
      params: searchTerm
        ? { searchTerm }
        : {}
    })
  },
  async delete(_id: string) {
    return axios.delete<string>(getActorsUrl(`/${_id}`))
  },
  async create() {
    return axios.post<string>(getActorsUrl(''))
  },
}