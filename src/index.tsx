import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'

import './styles/reset.css'
import './styles/global.css'

if (process.env.NODE_ENV !== 'production') {
  console.log(`==== ${process.env.NODE_ENV} ====`)
}

createRoot(document.body).render(<Router />)
