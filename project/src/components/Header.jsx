function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="bg-black text-white py-4 px-6">
      <nav className="flex space-x-8">
        <button
          onClick={() => setCurrentPage('home')}
          className={`text-lg font-medium hover:text-gray-300 transition-colors ${
            currentPage === 'home' ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('activities')}
          className={`text-lg font-medium hover:text-gray-300 transition-colors ${
            currentPage === 'activities' ? 'text-white border-b-2 border-white pb-1' : 'text-gray-400'
          }`}
        >
          Activities
        </button>
      </nav>
    </header>
  )
}

export default Header