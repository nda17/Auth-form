import { Roles } from '@/auth/decorators/roles.decorator';
import { JwtAuthGuard } from '@/auth/guards/jwt.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';

export const Auth = (roles: Role | Role[] = [Role.USER]) => {
	if (!Array.isArray(roles)) {
		roles = [roles];
	}

	return applyDecorators(
		Roles(...roles),
		UseGuards(JwtAuthGuard, RolesGuard)
	);
};
