import { IFileResponse } from '@/file/file.interface';
import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, exists, remove, writeFile } from 'fs-extra';
import { extname } from 'path';

@Injectable()
export class FileService {
	async saveFiles(
		files: Express.Multer.File[],
		folder: string = 'default',
		id: string
	): Promise<IFileResponse[]> {
		const uploadFolder = `${path}/uploads/${folder}`;

		await ensureDir(uploadFolder);

		const res: IFileResponse[] = await Promise.all(
			files.map(async file => {
				const originalFileName = file.originalname;
				const extension = extname(originalFileName);
				const newFileName = `${id}${extension}`;

				await writeFile(`${uploadFolder}/${newFileName}`, file.buffer);

				return {
					url: `/uploads/${folder}/${newFileName}`,
					name: newFileName
				};
			})
		);

		return res;
	}

	async deleteFile(avatarPath: string) {
		const avatarFile = `${path}${avatarPath}`;

		if (await exists(avatarFile)) {
			try {
				await remove(avatarFile);
			} catch (err) {
				console.error(`File ${avatarPath} deletion error:`, err);
			}
		}
	}
}
