import { axiosInterceptorsRequest } from '@/api/interceptors'
import { IUser } from '@/shared/types/user.types'

class UserService {
	private _BASE_URL = '/users'

	async fetchProfile() {
		return axiosInterceptorsRequest.get<IUser>(`${this._BASE_URL}/profile`)
	}

	async fetchPremium() {
		return axiosInterceptorsRequest.get<{ access: true }>(
			`${this._BASE_URL}/premium`
		)
	}

	async fetchManager() {
		return axiosInterceptorsRequest.get<{ access: true }>(
			`${this._BASE_URL}/manager`
		)
	}

	async fetchUserList(searchTerm?: string) {
		return axiosInterceptorsRequest.get<IUser[]>(
			`${this._BASE_URL}/user-list`,
			{
				params: searchTerm
					? {
							searchTerm
					  }
					: {}
			}
		)
	}
}

export default new UserService()
