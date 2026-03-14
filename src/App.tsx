import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './styles.css'
import Sidebar from './components/Sidebar'
import { About, Blog, Research, Projects } from './components/Sections'

export type Theme = 'default' | 'green' | 'orange' | 'pink'

export const NAME = 'Anthony Gorman'

export function HomePage({ theme, setTheme }: { theme: Theme; setTheme: (t: Theme) => void }) {
  return (
    <div className="layout">
      <Sidebar theme={theme} onThemeChange={setTheme} />
      <main className="main">
        <About />
        <Blog />
        <Research />
        <Projects />
      </main>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('default')

  document.documentElement.setAttribute('data-theme', theme === 'default' ? '' : theme)

  return (
    <Outlet context={{ theme, setTheme }} />
  )
}
