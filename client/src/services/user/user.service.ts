import { axiosInterceptorsRequest } from '@/api/interceptors';
import { IUserEditInput } from '@/components/screens/admin/users/(form)/user-editing-form/user-editing-form.interface';
import { IUser } from '@/shared/types/user.types';

export interface IPaginationResponse<T> {
	items: T[];
	isHasMore: boolean;
}

export interface IPaginationParams {
	skip?: number;
	take?: number;
	searchTerm?: string;
}

class UserService {
	private _BASE_URL = '/users';

	async getProfile() {
		return axiosInterceptorsRequest.get<IUser>(
			`${this._BASE_URL}/profile`
		);
	}

	async getPremium() {
		return axiosInterceptorsRequest.get<{ access: true }>(
			`${this._BASE_URL}/premium`
		);
	}

	async getManager() {
		return axiosInterceptorsRequest.get<{ access: true }>(
			`${this._BASE_URL}/manager`
		);
	}

	async getAll(params?: IPaginationParams) {
		return axiosInterceptorsRequest.get<IPaginationResponse<IUser>>(
			`${this._BASE_URL}/user-list`,
			{ params }
		);
	}

	async getById(id: string) {
		return axiosInterceptorsRequest.get<IUser>(
			`${this._BASE_URL}/edit/${id}`
		);
	}

	async delete(id: string) {
		return axiosInterceptorsRequest.delete<string>(
			`${this._BASE_URL}/user/${id}`
		);
	}

	async update(id: string, data: IUserEditInput) {
		return axiosInterceptorsRequest.patch<string>(
			`${this._BASE_URL}/user/${id}`,
			data
		);
	}

	async create(data: IUserEditInput) {
		return axiosInterceptorsRequest.post<string>(
			`${this._BASE_URL}/create`,
			data
		);
	}
}

export default new UserService();
