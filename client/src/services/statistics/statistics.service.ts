import { axiosInterceptorsRequest } from '@/api/interceptors';

export interface IUserRegistrationsByMonth {
	month: string;
	year: number;
	count: number;
}

class StatisticsService {
	private _BASE_URL = '/statistics';

	async getRegistrationsByMonth() {
		return axiosInterceptorsRequest.get<IUserRegistrationsByMonth[]>(
			`${this._BASE_URL}/registrations-by-month`
		);
	}

	async getCounters() {
		return axiosInterceptorsRequest.get<{ name: string; value: string }[]>(
			`${this._BASE_URL}/counters`
		);
	}
}

export default new StatisticsService();
