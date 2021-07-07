import React, { useState } from 'react'
import './App.css';
import { Box } from '@chakra-ui/react'
import SearchBar from './components/SearchBar';
import CommercesList from './components/Table/CommercesList';
import { getCommerces } from './store/helpers';

function App() {

  const [search, setSearch] = useState("")
  const [orderCommerce, setOrderCommerce] = useState(null);

  const handleOrder = ()=>{
      orderCommerce == null ? setOrderCommerce("acs") :
      orderCommerce == "acs" ? setOrderCommerce("desc") :
      setOrderCommerce(null)
  }
  const handleChange = (event) => {
      setSearch(event.target.value)
  };

  getCommerces({search, orderCommerce})
  return (

      <Box
        h="max-content"
        >

        <SearchBar handleChange={handleChange}/>
        <CommercesList handleOrder={handleOrder}/>

      </Box>

  )
}

export default App
