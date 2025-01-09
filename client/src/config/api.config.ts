export const API_URL =
	process.env.MODE === 'production'
		? `${process.env.PRODUCTION_HOST}/api`
		: `${process.env.DEVELOPMENT_HOST}/api`
