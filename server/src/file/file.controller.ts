import { Auth } from '@/auth/decorators/auth.decorator';
import { FileService } from '@/file/file.service';
import {
	Controller,
	HttpCode,
	Post,
	Query,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/files')
export class FileController {
	constructor(private readonly fileService: FileService) {}

	@HttpCode(200)
	@Auth()
	@Post()
	@UseInterceptors(FileInterceptor('file'))
	async uploadFile(
		@UploadedFile() file: Express.Multer.File,
		@Query('folder') folder?: string,
		@Query('id') id?: string
	) {
		return this.fileService.saveFiles([file], folder, id);
	}
}
