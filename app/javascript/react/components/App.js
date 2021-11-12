import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BandsIndexPage from './bands/BandIndex'
import BandsShowContainer from './bands/BandShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BandsIndexPage} />
        <Route exact path="/bands/:id" component={BandsShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App