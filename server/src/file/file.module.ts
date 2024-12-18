import { FileController } from '@/file/file.controller'
import { FileService } from '@/file/file.service'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		})
	],
	providers: [FileService],
	controllers: [FileController]
})
export class FileModule {}
