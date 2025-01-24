import { axiosInterceptorsRequest } from '@/api/interceptors';

class AdminService {
	private _BASE_URL = '/users';

	async getCount() {
		return axiosInterceptorsRequest.get<number>(`${this._BASE_URL}/count`);
	}
}

export default new AdminService();
