import { Auth } from '@/auth/decorators/auth.decorator';
import { StatisticsService } from '@/statistics/statistics.service';
import { Controller, Get, HttpCode } from '@nestjs/common';
import { Role } from '@prisma/client';

@Controller('/statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('/registrations-by-month')
	async getRegistrationsByMonth() {
		return this.statisticsService.getUserRegistrationsByMonth();
	}

	@HttpCode(200)
	@Auth(Role.ADMIN)
	@Get('/counters')
	getCounters() {
		return this.statisticsService.getCounters();
	}
}
