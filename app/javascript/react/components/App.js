import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={BandsIndexPage} />
    </BrowserRouter>
  )
}

export default App
