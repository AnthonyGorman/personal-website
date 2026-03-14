import { useParams, Link } from 'react-router-dom'
import { POSTS } from '../data/posts'
import type { Block } from '../data/posts'
import Poem from '../components/Poem'
import Dialogue from '../components/Dialogue'

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={i} className="blog-post__paragraph">{block.text}</p>
    case 'poem':
      return <Poem key={i} title={block.title} stanzas={block.stanzas} />
    case 'dialogue':
      return <Dialogue key={i} lines={block.lines} />
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="blog-post">
        <Link to="/#blog" className="blog-post__back">← back</Link>
        <p className="blog-post__paragraph">Post not found.</p>
      </div>
    )
  }

  return (
    <div className="blog-post" ref={(el) => { if (el) window.scrollTo(0, 0) }}>
      <Link to="/#blog" className="blog-post__back">← back</Link>
      <h1 className="blog-post__title">{post.title}</h1>
      <p className="blog-post__date">{post.date}</p>
      <div className="blog-post__body">
        {post.blocks.map(renderBlock)}
      </div>
    </div>
  )
}
