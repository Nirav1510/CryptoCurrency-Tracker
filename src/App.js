import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CoinDetailPage from './Pages/CoinDetailPage'
import CoinSummaryPage from './Pages/CoinSummaryPage'

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={CoinSummaryPage} />
    </BrowserRouter>
  )
}

export default App

