import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { ISitemapField, getServerSideSitemap } from 'next-sitemap'

export async function GET(request: Request) {

    const url = 'http://localhost:3000'

    const fields: ISitemapField[] = [
        {
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.9
        },
        {
            loc: `${url}${PUBLIC_PAGES.HOME}`,
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 1
        },
        {
            loc: `${url}${PUBLIC_PAGES.FREE_CONTENT}`,
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.9
        },
        {
            loc: `${url}${PUBLIC_PAGES.PREMIUM_CONTENT}`,
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.9
        },
    
    ]

    return getServerSideSitemap(fields)
    
} 
