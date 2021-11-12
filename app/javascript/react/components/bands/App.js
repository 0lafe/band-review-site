import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BandsIndexPage from './Index'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={BandsIndexPage} />
    </BrowserRouter>
  )
}

export default App