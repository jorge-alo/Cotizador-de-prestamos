import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CotizadorApp } from './CotizadorApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CotizadorApp />
  </StrictMode>,
)
