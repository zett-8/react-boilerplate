import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Page404 } from './components/404'
import { LandingPageContainer } from './containers/landing'
import { ErrorBoundary } from './providers/errorBoundary'

export const Router = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
)
