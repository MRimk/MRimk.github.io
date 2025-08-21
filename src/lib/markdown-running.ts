import fm from 'front-matter'
import { marked } from 'marked'

export type ReportFrontmatter = {
    name: string
    date: string
    type: string
    distance: string
    image: string
    time: string
}

export type ReportDoc = ReportFrontmatter & { slug: string; html: string }

const rawModules = import.meta.glob('../projects/*.md', { as: 'raw', eager: true }) as Record<string, string>

function slugify(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const projects: ReportDoc[] = Object.entries(rawModules)
    .map(([_, raw]) => {
        const parsed = fm<ReportFrontmatter>(raw)
        const data = parsed.attributes
        const slug = slugify(data.name)
        const html = marked.parse(parsed.body) as string
        return { ...data, slug, html }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

export function getProjectsBySlug(slug: string) {
    return projects.find((c) => c.slug === slug)
}
