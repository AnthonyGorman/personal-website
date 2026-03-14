import { useState, useEffect } from 'react'
import { NAME } from '../App'
import type { Theme } from '../App'

const NAV_ITEMS = [
  { label: 'about',    href: '#about' },
  { label: 'blog',     href: '#blog' },
  { label: 'research', href: '#research' },
  { label: 'projects', href: '#projects' },
]

const THEMES: { key: Theme; className: string; label: string }[] = [
  { key: 'default', className: 'theme-btn--white',  label: 'white' },
  { key: 'green',   className: 'theme-btn--green',  label: 'retro green' },
  { key: 'orange',  className: 'theme-btn--orange', label: 'vegas orange' },
  { key: 'pink',    className: 'theme-btn--pink',   label: 'hot pink' },
]

interface Props {
  theme: Theme
  onThemeChange: (t: Theme) => void
}

export default function Sidebar({ theme, onThemeChange }: Props) {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const visible = new Set<string>()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = (entry.target.closest('section') as HTMLElement | null)?.id
        if (!id) return
        if (entry.isIntersecting) visible.add(id)
        else visible.delete(id)
      })
      const active = NAV_ITEMS.find(({ label }) => visible.has(label))
      if (active) setActiveSection(active.label)
    })

    NAV_ITEMS.forEach(({ label }) => {
      const header = document.querySelector(`#${label} .section__label`)
      if (header) observer.observe(header)
    })

    return () => observer.disconnect()
  }, [])
  return (
    <aside className="sidebar">
      <img src={import.meta.env.BASE_URL + 'Anthony.png'} alt={NAME} className="sidebar__photo" />

      <span className="sidebar__name">{NAME}</span>

      <nav>
        <ul className="sidebar__nav">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={activeSection === label ? 'active' : ''}
                onClick={() => setActiveSection(label)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="theme-switcher">
        {THEMES.map(({ key, className, label }) => (
          <button
            key={key}
            className={`theme-btn ${className} ${theme === key ? 'active' : ''}`}
            title={label}
            onClick={() => onThemeChange(key)}
            aria-label={`Switch to ${label} theme`}
          />
        ))}
      </div>
    </aside>
  )
}
