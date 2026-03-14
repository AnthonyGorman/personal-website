import { Link } from 'react-router-dom'
import { POSTS } from '../data/posts'

export function Blog() {
  return (
    <section id="blog" className="section">
      <p className="section__label">002 / blog</p>
      <h2 className="section__title">Writing</h2>
      <div className="card-grid">
        {POSTS.map((p) => (
          <Link to={`/blog/${p.slug}`} key={p.slug} className="card">
            <div className="card__title">{p.title}</div>
            <div className="card__meta">{p.date}</div>
            <div className="card__desc">{p.description}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
