import { IProfileInput } from "@/components/screens/profile/profile.interface";
import { getMoviesUrl, getUsersUrl } from "@/configs/api.config"
import { IMovie } from "@/shared/types/movie.types";
import { IUser } from "@/shared/types/user.types"
import axios from 'api/interceptors';


export const UserService = {
  async getUsers(searchTerm?: string) {
    return axios.get<IUser[]>(getUsersUrl(``), {
      params: searchTerm
        ? { searchTerm }
        : {}
    })
  },
  async deleteUser(_id: string) {
    return axios.delete<string>(getUsersUrl(`/${_id}`))
  },
  async updateUser(_id: string, data: IProfileInput) {
    return axios.put<string>(getUsersUrl(`/${_id}`), data)
  },
  async getProfile() {
    return axios.get<IUser>(getUsersUrl('/profile'))
  },
  async updateProfile(data: IProfileInput) {
    return axios.put<string>(getUsersUrl('/profile'), data)
  },
  async getById(_id: string) {
    return axios.get<IUser>(getUsersUrl(`/${_id}`))
  },
  async getFavorites() {
    return axios.get<IMovie[]>(getUsersUrl('/profile/favorites'))
  },

  async toggleFavorite(movieId: string) {
    return axios.post(getUsersUrl('/profile/favorites'), {
      movieId,
    })
  },

}