import thisIsDystopia from './posts/this-is-dystopia'

export type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'poem'; title: string; stanzas: string[][] }
  | { type: 'dialogue'; lines: { speaker: string; text: string }[] }

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  blocks: Block[]
}

export const POSTS: Post[] = [
  thisIsDystopia,
]
