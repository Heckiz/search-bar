import React, { useState } from 'react'
import './App.css';
import { Box } from '@chakra-ui/react'
import SearchBar from './components/SearchBar';
import CommercesList from './components/Table/CommercesList';
import { getCommerces } from './store/helpers';

function App() {

  const [search, setSearch] = useState("")
  const [orderCommerce, setOrderCommerce] = useState(null);
  const [orderCuit, setOrderCuit] = useState(null);


  const handleOrderByCommerce = ()=>{
      orderCommerce == null ? setOrderCommerce("acs") :
      orderCommerce == "acs" ? setOrderCommerce("desc") :
      setOrderCommerce(null)
  }
  const handleOrderByCuit = ()=>{
    orderCuit == null ? setOrderCuit("acs") :
    orderCuit == "acs" ? setOrderCuit("desc") :
    setOrderCuit(null)
  }
  const handleChange = (event) => {
      setSearch(event.target.value)
  };

  getCommerces({search, orderCommerce, orderCuit})
  return (

      <Box
        h="max-content"
        >

        <SearchBar handleChange={handleChange}/>
        <CommercesList 
        handleOrderByCommerce={handleOrderByCommerce}  
        handleOrderByCuit={handleOrderByCuit}/>

      </Box>

  )
}

export default App
