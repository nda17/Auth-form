import { axiosInterceptorsRequest } from '@/api/interceptors';

class FileService {
	async upload(file: FormData, folder?: string) {
		return axiosInterceptorsRequest.post<{ url: string; name: string }[]>(
			'/files',
			file,
			{
				params: {
					folder
				},
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);
	}
}

export default new FileService();
