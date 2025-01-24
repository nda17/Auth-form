import { Auth } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { PaginationArgsWithSearchTerm } from '@/pagination/pagination.args';
import { UpdateUserDto } from '@/user/dto/update-user.dto';
import { UserService } from '@/user/user.service';
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Query
} from '@nestjs/common';
import { Role } from '@prisma/client';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(200)
	@Auth()
	@Get('profile')
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id);
	}

	@HttpCode(200)
	@Auth(Role.PREMIUM)
	@Get('premium')
	async getPremium() {
		return { access: true };
	}

	@HttpCode(200)
	@Auth([Role.ADMIN, Role.MANAGER])
	@Get('manager')
	async getManager() {
		return { access: true };
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('user-list')
	async getAll(@Query() params: PaginationArgsWithSearchTerm) {
		return this.userService.getAll(params);
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('edit/:id')
	async getById(@Param('id') id: string) {
		return this.userService.getById(id);
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('count')
	async getCount() {
		return this.userService.getCount();
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Patch('user/:id')
	async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
		return this.userService.update(id, dto);
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Delete('user/:id')
	async delete(@Param('id') id: string) {
		return this.userService.delete(id);
	}
}
