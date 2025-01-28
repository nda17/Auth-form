import fileService from '@/services/file/file.service';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

export const useUploadFile = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	const [isLoading, setIsLoading] = useState(false);

	const { mutateAsync } = useMutation({
		mutationKey: ['upload-file'],
		mutationFn: (data: FormData) => fileService.upload(data, folder),
		onSuccess({ data }) {
			onChange(data[0].url);
		},

		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(`Upload failed: ${error.response?.data?.message}`);
			}
		}
	});

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true);
			const files = e.target.files;

			if (files?.length) {
				const formData = new FormData();
				formData.append('file', files[0]);
				await mutateAsync(formData);

				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			}
		},
		[mutateAsync]
	);

	return useMemo(
		() => ({ uploadFile, isLoading }),
		[uploadFile, isLoading]
	);
};
