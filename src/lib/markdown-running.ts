import fm from 'front-matter'
import { marked } from 'marked'
import { slugify } from './markdownlib'

export type ReportFrontmatter = {
    name: string
    date: string
    type: string
    distance: string
    elevation?: string
    image: string
    time: string
    place?: string
    location?: string
    results?: string
}

export type ReportDoc = ReportFrontmatter & { slug: string; html: string }

const rawModules = import.meta.glob('../reports/*.md', { as: 'raw', eager: true }) as Record<string, string>

export const reports: ReportDoc[] = Object.entries(rawModules)
    .map(([_, raw]) => {
        const parsed = fm<ReportFrontmatter>(raw)
        const data = parsed.attributes
        const slug = slugify(data.name)
        const html = marked.parse(parsed.body) as string
        return { ...data, slug, html }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

export function getReportsBySlug(slug: string) {
    return reports.find((c) => c.slug === slug)
}
