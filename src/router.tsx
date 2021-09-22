import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ErrorBoundary } from './providers/errorBoundary'
import { Page404 } from './components/404'

import { LandingPageContainer } from './containers/landing'

export const Router = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
)
