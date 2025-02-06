import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

@Injectable()
export class StatisticsService {
	constructor(private prisma: PrismaService) {}

	async getUserRegistrationsByMonth() {
		const currentMonth = new Date().getMonth(); // Текущий месяц (от 0 до 11)
		const currentYear = new Date().getFullYear(); // Текущий год

		// Начало отчетного периода: июль прошлого года
		const startDate = new Date(currentYear - 1, currentMonth + 1, 1);

		// Конец отчетного периода: последний день текущего месяца
		const endDate = new Date(currentYear, currentMonth + 1, 0);

		// Генерация всех месяцев между startDate и endDate
		const allMonths = this.generateMonths(startDate, endDate);

		// Группировка пользователей по месяцу создания (createdAt)
		const registrations = await this.prisma.user.groupBy({
			by: ['createdAt'],
			_count: true,
			orderBy: {
				createdAt: 'asc' // Сортировка по дате создания в порядке возрастания
			},
			where: {
				createdAt: {
					gte: startDate, // От начала отчетного периода
					lte: endDate // До конца отчетного периода
				}
			}
		});

		const registrationMap = new Map<string, number>(); // Map для хранения количества регистраций по месяцам

		for (const reg of registrations) {
			const month = reg.createdAt.getMonth() + 1; // Получаем месяц создания (от 1 до 12)
			const year = reg.createdAt.getFullYear(); // Получаем год создания
			const key = `${year}-${month}`; // Создаем ключ в формате "год-месяц"

			if (registrationMap.has(key)) {
				// Если ключ уже существует, увеличиваем значение на количество регистраций
				registrationMap.set(key, registrationMap.get(key) + reg._count);
			} else {
				// Если ключ не существует, добавляем новую запись
				registrationMap.set(key, reg._count);
			}
		}

		// Преобразование списка месяцев в формат с названиями месяцев и подсчетом регистраций
		return allMonths.map(({ month, year }) => {
			const key = `${year}-${month}`; // Ключ в формате "год-месяц"
			const monthName = dayjs(new Date(year, month - 1)).format('MMMM'); // Преобразование числа месяца в название
			return {
				month: monthName, // Название месяца
				year,
				count: registrationMap.get(key) || 0 // Количество регистраций или 0, если нет регистраций
			};
		});
	}

	private generateMonths(
		start: Date,
		end: Date
	): { month: number; year: number }[] {
		const current = new Date(start); // Копируем начальную дату
		const endMonth = new Date(end); // Копируем конечную дату
		const months = []; // Массив для хранения месяцев

		while (current < endMonth) {
			months.push({
				month: current.getMonth() + 1, // Добавляем месяц (от 1 до 12)
				year: current.getFullYear() // Добавляем год
			});
			current.setMonth(current.getMonth() + 1); // Переходим к следующему месяцу
		}

		// Добавление последнего месяца
		months.push({
			month: endMonth.getMonth() + 1, // Месяц (от 1 до 12)
			year: endMonth.getFullYear() // Год
		});

		return months; // Возвращаем массив месяцев
	}

	async getCounters() {
		const usersCount = await this.prisma.user.count();

		const activeUsersCount = await this.prisma.user.count({
			where: {
				updatedAt: {
					gte: new Date(new Date().setDate(new Date().getDate() - 30))
				}
			}
		});

		const newUsersLastMonth = await this.prisma.user.count({
			where: {
				createdAt: {
					gte: new Date(new Date().setDate(new Date().getDate() - 30))
				}
			}
		});

		const notConfirmUsers = await this.prisma.user.count({
			where: {
				verificationToken: {
					not: {
						equals: ''
					}
				}
			}
		});

		return [
			{
				name: 'Users',
				value: usersCount
			},
			{
				name: 'Active Users',
				value: activeUsersCount
			},
			{
				name: 'Last Month',
				value: newUsersLastMonth
			},
			{
				name: 'Not confirm',
				value: notConfirmUsers
			}
		];
	}
}
