import { PrismaService } from '@/prisma.service'
import { UserController } from '@/user/user.controller'
import { UserService } from '@/user/user.service'
import { Module } from '@nestjs/common'

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService],
	exports: [UserService]
})
export class UserModule {}
