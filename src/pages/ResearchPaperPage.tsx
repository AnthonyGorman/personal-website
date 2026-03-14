import { useParams, Link } from 'react-router-dom'
import { PAPERS } from '../data/papers'
import type { PaperBlock } from '../data/papers'
import { Block, InlineText } from '../components/Math'

function renderBlock(block: PaperBlock, i: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={i} className="research-paper__paragraph">
          <InlineText text={block.text} />
        </p>
      )
    case 'math':
      return <Block key={i} tex={block.tex} />
    case 'label':
      return <p key={i} className="research-paper__label">{block.text}</p>
  }
}

export default function ResearchPaperPage() {
  const { slug } = useParams<{ slug: string }>()
  const paper = PAPERS.find((p) => p.slug === slug)

  if (!paper) {
    return (
      <div className="research-paper">
        <Link to="/#research" className="research-paper__back">← back</Link>
        <p className="research-paper__paragraph">Paper not found.</p>
      </div>
    )
  }

  return (
    <div className="research-paper" ref={(el) => { if (el) window.scrollTo(0, 0) }}>
      <Link to="/#research" className="research-paper__back">← back</Link>
      <h1 className="research-paper__title">{paper.title}</h1>
      <p className="research-paper__venue">{paper.venue}</p>
      <div className="research-paper__body">
        {paper.blocks.map(renderBlock)}
      </div>
    </div>
  )
}
