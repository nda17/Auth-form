export async function GET(request: Request) {
	const isProduction = process.env.MODE === 'production';
	let content = '';

	if (isProduction) {
		content = `
User-Agent: GoogleBot
Host: ${process.env.PRODUCTION_HOST}
Disallow: /restore
Disallow: /register
Disallow: /login
Disallow: /restore-password
Disallow: /profile
Disallow: /admin
Disallow: /manager
Disallow: *utm_

Sitemap: ${process.env.PRODUCTION_HOST}/sitemap.xml

User-Agent: Yandex
Host: ${process.env.PRODUCTION_HOST}
Disallow: /restore
Disallow: /register
Disallow: /login
Disallow: /restore-password
Disallow: /profile
Disallow: /admin
Disallow: /manager
Disallow: *utm_

Sitemap: ${process.env.PRODUCTION_HOST}/sitemap.xml

User-Agent: *
Host: ${process.env.PRODUCTION_HOST}
Disallow: /restore
Disallow: /register
Disallow: /login
Disallow: /restore-password
Disallow: /profile
Disallow: /admin
Disallow: /manager
Disallow: *utm_

Sitemap: ${process.env.PRODUCTION_HOST}/sitemap.xml
`.trim();
	} else {
		content = `
User-Agent: *
Host: ${process.env.DEVELOPMENT_HOST}
Disallow: /
`.trim();
	}

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain' }
	});
}
