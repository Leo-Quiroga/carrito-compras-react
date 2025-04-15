import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoAPP } from './CarritoAPP'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoAPP />
    </StrictMode>
  </BrowserRouter>

)
