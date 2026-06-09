import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './styles/fonts.css'
import './styles/base.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name='description' content='My name is Brian Sturdivan and this is not an iMac G3.' />
    <title>Brian Sturdivan | Good Guy.</title>
    <App />
  </StrictMode>,
)
