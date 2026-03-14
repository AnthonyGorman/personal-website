import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import App, { HomePage } from './App'
import type { Theme } from './App'
import { useOutletContext } from 'react-router-dom'
import BlogPostPage from './pages/BlogPostPage'
import ResearchPaperPage from './pages/ResearchPaperPage'

function HomeWrapper() {
  const { theme, setTheme } = useOutletContext<{ theme: Theme; setTheme: (t: Theme) => void }>()
  return <HomePage theme={theme} setTheme={setTheme} />
}

const router = createHashRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <HomeWrapper /> },
      { path: '/blog/:slug', element: <BlogPostPage /> },
      { path: '/research/:slug', element: <ResearchPaperPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
