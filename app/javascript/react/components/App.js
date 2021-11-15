import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BandsIndexPage from './bands/BandIndex'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BandsIndexPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App