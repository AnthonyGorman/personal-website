import { NAME } from '../App'

export function About() {
  return (
    <section id="about" className="section">
      <p className="section__label">001 / about</p>
      <h1 className="section__title">Hi, I'm {NAME.split(' ')[0]}.</h1>
      <div className="section__body">
        <p>
          I'm a software engineer passionate about mathematics and poetry.
          I use this website to host my blog and show off some of the other
          projects that I work on.
        </p>
      </div>
    </section>
  )
}
