import { Link } from 'react-router-dom'
import { PAPERS } from '../data/papers'

export function Research() {
  return (
    <section id="research" className="section">
      <p className="section__label">003 / research</p>
      <h2 className="section__title">Research</h2>
      <div className="card-grid">
        {PAPERS.map((p) => (
          <Link to={`/research/${p.slug}`} className="card card--link" key={p.slug}>
            <div className="card__title">{p.title}</div>
            <div className="card__meta">{p.venue}</div>
            <div className="card__desc">{p.description}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
