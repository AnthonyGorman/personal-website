const PROJECTS = [
  {
    title: 'Java Simple Quadtree',
    stack: 'Java',
    desc: 'Open source contribution to a Java quad tree implementation.',
    link: 'https://github.com/AnthonyGorman/java-simple-quadtree/commit/2ba332da59d58385e936d12bf71f4127582fe61f',
  },
  {
    title: 'FunkyBalancedBrackets',
    stack: 'C',
    desc: 'A recursive O(n) solution to the balanced brackets problem that uses return values to track distances between matching brackets instead of a stack.',
    link: 'https://github.com/AnthonyGorman/FunkyBalancedBrackets/tree/main',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section__label">004 / projects</p>
      <h2 className="section__title">Projects</h2>
      <div className="card-grid">
        {PROJECTS.map((p) => (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="card card--link" key={p.title}>
            <div className="card__title">{p.title}</div>
            <div className="card__meta">{p.stack}</div>
            <div className="card__desc">{p.desc}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
