import { Auth } from '@/auth/decorators/auth.decorator'
import { CurrentUser } from '@/auth/decorators/user.decorator'
import { UpdateUserDto } from '@/user/dto/update-user.dto'
import { UserService } from '@/user/user.service'
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Query
} from '@nestjs/common'
import { Role } from '@prisma/client'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(200)
	@Auth()
	@Get('profile')
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getUserById(id)
	}

	@HttpCode(200)
	@Auth(Role.PREMIUM)
	@Get('premium')
	async getPremium() {
		return { access: true }
	}

	@HttpCode(200)
	@Auth([Role.ADMIN, Role.MANAGER])
	@Get('manager')
	async getManager() {
		return { access: true }
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('user-list')
	async getUserList(@Query('searchTerm') searchTerm?: string) {
		return this.userService.getUserList(searchTerm)
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('edit/:id')
	async getUserById(@Param('id') id: string) {
		return this.userService.getUserById(id)
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('count')
	async getCountUsers() {
		return this.userService.getCount()
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Patch('user/:id')
	async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
		return this.userService.updateUser(id, dto)
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Delete('user/:id')
	async deleteUser(@Param('id') id: string) {
		return this.userService.deleteUser(id)
	}
}
