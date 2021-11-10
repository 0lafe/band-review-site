import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BandsIndexPage from './bands/Index'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={BandsIndexPage} />
    </BrowserRouter>
  )
}

export default App

import React from 'react'

const BandsIndexPage = (props) => {

 return(
   <h1>Bands Index Page</h1>
 ) 
}

export default BandsIndexPage