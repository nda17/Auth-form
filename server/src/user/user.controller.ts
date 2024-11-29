import { Auth } from '@/auth/decorators/auth.decorator'
import { CurrentUser } from '@/auth/decorators/user.decorator'
import { UserService } from '@/user/user.service'
import { Controller, Delete, Get, Param, Query } from '@nestjs/common'
import { Role } from '@prisma/client'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Auth()
	@Get('profile')
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id)
	}

	@Auth(Role.PREMIUM)
	@Get('premium')
	async getPremium() {
		return { access: true }
	}

	@Auth([Role.ADMIN, Role.MANAGER])
	@Get('manager')
	async getManager() {
		return { access: true }
	}

	@Auth(Role.ADMIN)
	@Get('user-list')
	async getList(@Query('searchTerm') searchTerm?: string) {
		return this.userService.getUsers(searchTerm)
	}

	@Auth(Role.ADMIN)
	@Get('count')
	async getCountUsers() {
		return this.userService.getCount()
	}

	@Auth(Role.ADMIN)
	@Delete('user/:id')
	async deleteUser(@Param('id') id: string) {
		return this.userService.delete(id)
	}
}
