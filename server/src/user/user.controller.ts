import { Auth } from '@/auth/decorators/auth.decorator'
import { CurrentUser } from '@/auth/decorators/user.decorator'
import { UserService } from '@/user/user.service'
import { Controller, Get } from '@nestjs/common'
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
	@Get('users-list')
	async getList() {
		return this.userService.getUsers()
	}

	@Auth(Role.ADMIN)
	@Get('count')
	async getCountUsers() {
		return this.userService.getCount()
	}
}
