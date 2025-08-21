import fm from 'front-matter'
import { marked } from 'marked'

export type ProjectFrontmatter = {
    name: string
    year: string
    type: string
    image: string
    pdf?: string // Optional field for PDF link
}

export type CatDoc = ProjectFrontmatter & { slug: string; html: string }

const rawModules = import.meta.glob('../projects/*.md', { as: 'raw', eager: true }) as Record<string, string>

function slugify(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const projects: CatDoc[] = Object.entries(rawModules)
    .map(([_, raw]) => {
        const parsed = fm<ProjectFrontmatter>(raw)
        const data = parsed.attributes
        const slug = slugify(data.name)
        const html = marked.parse(parsed.body) as string
        return { ...data, slug, html }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

export function getProjectsBySlug(slug: string) {
    return projects.find((c) => c.slug === slug)
}
