import { useState } from 'react'
import Monetization from './components/monetization/Monetization'
import Header from './components/Header'
import Home from './components/Home'
import Activities from './components/Activities'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'activities':
        return <Activities />
      default:
        return <Home />
    }
  }

  return (
    <Monetization>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </Monetization>
  )
}

export default App