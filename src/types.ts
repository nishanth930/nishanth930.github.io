/**
 * Text fields typed as `Rich` accept two bits of inline markup:
 * `**bold**` and `[label](https://url)`. Everything else is plain text.
 */
export type Rich = string

export interface Profile {
  name: string
  eyebrow: string
  headline: string
  lede: Rich
  location: string
  email: string
  linkedin: { url: string; label: string }
  resume: { href: string; filename: string }
}

export interface Stat {
  value: string
  label: string
}

export interface Fact {
  label: string
  value: string
}

export interface About {
  paragraphs: Rich[]
  facts: Fact[]
}

export interface Role {
  period: string
  title: string
  org?: string
  sub?: string
  summary?: Rich
  bullets?: Rich[]
  /** Collapsed "earlier roles" entry, rendered with a muted style. */
  earlier?: boolean
}

export interface Project {
  tag: string
  title: string
  body: string
  stack: string
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface Education {
  school: string
  detail: string
}

export interface NavItem {
  id: string
  label: string
}
