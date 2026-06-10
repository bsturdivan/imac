import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './styles/fonts.css'
import './styles/base.css'
import App from './App.tsx'

const year = new Date().getFullYear()

const description = `Brian Sturdivan
San Francisco, ${year}\n
The Illusion of Convenience, 1999
HTML and CSS on screen.`

const title = 'Brian Sturdivan | The Illusion of Convenience'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name='description' content={description} />
    <title>{title}</title>
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content='/og.png' />
    <meta property='og:url' content={window.location.href} />
    <App />
  </StrictMode>,
)
