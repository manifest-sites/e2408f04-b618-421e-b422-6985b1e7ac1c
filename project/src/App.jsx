import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import Header from './components/Header'
import Home from './components/Home'
import Activities from './components/Activities'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname
    if (path === '/activities') return 'activities'
    return 'home'
  })

  const handlePageChange = (page) => {
    setCurrentPage(page)
    const url = page === 'home' ? '/' : `/${page}`
    window.history.pushState(null, '', url)
  }

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/activities') {
        setCurrentPage('activities')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

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
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      {renderPage()}
    </Monetization>
  )
}

export default App