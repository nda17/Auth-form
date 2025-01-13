import { axiosInterceptorsRequest } from '@/api/interceptors';
import { IUserEditInput } from '@/components/screens/admin/user/edit/user-edit.interface';
import { IUser } from '@/shared/types/user.types';

class UserService {
	private _BASE_URL = '/users';

	async fetchProfile() {
		return axiosInterceptorsRequest.get<IUser>(
			`${this._BASE_URL}/profile`
		);
	}

	async fetchPremium() {
		return axiosInterceptorsRequest.get<{ access: true }>(
			`${this._BASE_URL}/premium`
		);
	}

	async fetchManager() {
		return axiosInterceptorsRequest.get<{ access: true }>(
			`${this._BASE_URL}/manager`
		);
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
		);
	}

	async fetchUserById(id: string) {
		return axiosInterceptorsRequest.get<IUser>(
			`${this._BASE_URL}/edit/${id}`
		);
	}

	async deleteUser(id: string) {
		return axiosInterceptorsRequest.delete<string>(
			`${this._BASE_URL}/user/${id}`
		);
	}

	async updateUser(id: string, data: IUserEditInput) {
		return axiosInterceptorsRequest.patch<string>(
			`${this._BASE_URL}/user/${id}`,
			data
		);
	}
}

export default new UserService();
