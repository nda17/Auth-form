import { IFileResponse } from '@/file/file.interface';
import { PrismaService } from '@/prisma.service';
import { timeStamp } from '@/utils/time-stamp.util';
import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, exists, remove, rename, writeFile } from 'fs-extra';
import { extname } from 'path';

@Injectable()
export class FileService {
	constructor(private prisma: PrismaService) {}

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
				const getTimeStamp = timeStamp();
				const newFileName = `${id}.${getTimeStamp}${extension}`;
				const user = await this.prisma.user.findFirst({
					where: {
						id: id
					}
				});

				if (user && user?.avatarPath) {
					const avatarFile = `${path}${user.avatarPath}`;

					if (await exists(avatarFile)) {
						try {
							await remove(avatarFile);
						} catch (err) {
							console.error(
								`File ${user.avatarPath} deletion error:`,
								err
							);
						}
					}
				}

				await writeFile(`${uploadFolder}/${newFileName}`, file.buffer);

				if (user && user?.avatarPath) {
					await this.prisma.user.update({
						where: {
							id: id
						},
						data: {
							avatarPath: `/uploads/${folder}/${id}.${getTimeStamp}${extension}`
						}
					});
				}

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

	async changeFileName(id: string, dtoId: string, avatarPath: string) {
		const originalFileName = `${path}${avatarPath}`;
		const extension = extname(originalFileName);
		const getTimeStamp = timeStamp();
		const newFileName = `${path}/uploads/user-avatar/${dtoId}.${getTimeStamp}${extension}`;

		if (await exists(originalFileName)) {
			try {
				await rename(originalFileName, newFileName);

				await this.prisma.user.update({
					where: {
						id: id
					},
					data: {
						avatarPath: `/uploads/user-avatar/${dtoId}.${getTimeStamp}${extension}`
					}
				});
			} catch (err) {
				console.error(`Error renaming file ${avatarPath}:`, err);
			}
		}
	}
}
