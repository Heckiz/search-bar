import React, { useState } from 'react'
import './App.css';
import { Box } from '@chakra-ui/react'
import SearchBar from './components/SearchBar';
import CommercesList from './components/Table/CommercesList';

function App() {

  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
  };
  return (
    <Box
      h="max-content"
    >
      <SearchBar handleSearch={handleSearch} />
      <CommercesList search={search}/>

    </Box>

  )
}

export default App
