import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CommercesList from './components/Table/CommercesList'

function App() {

  return (
    <div className="App">
      <SearchBar/>
      <CommercesList/>
    </div>
  )
}

export default App
