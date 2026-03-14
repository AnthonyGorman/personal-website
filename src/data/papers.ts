import conicSubstitution from './papers/conic-substitution'

export type PaperBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'math'; tex: string }
  | { type: 'label'; text: string }

export interface Paper {
  slug: string
  title: string
  venue: string
  description: string
  blocks: PaperBlock[]
}

export const PAPERS: Paper[] = [
  conicSubstitution,
]
