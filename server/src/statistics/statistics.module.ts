import { PrismaService } from '@/prisma.service';
import { StatisticsController } from '@/statistics/statistics.controller';
import { StatisticsService } from '@/statistics/statistics.service';
import { Module } from '@nestjs/common';

@Module({
	controllers: [StatisticsController],
	providers: [StatisticsService, PrismaService],
	exports: [StatisticsService]
})
export class StatisticsModule {}
