import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// The theme re-exports the React95 kit and loads its styles, so a single import
// wires the whole look & feel; primitives come from the theme too.
import '@owdproject/react-theme-win95/styles.css'
import { App } from './App'

const container = document.getElementById('root')
if (!container) throw new Error('#root not found')

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
