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
  const [state, setState] = useState(null);



  const handleOrderByCommerce = ()=>{
      orderCommerce == null ? setOrderCommerce("acs")&setOrderCuit(null) :
      orderCommerce == "acs" ? setOrderCommerce("desc") :
      setOrderCommerce(null)
  }
  const handleOrderByCuit = ()=>{
    orderCuit == null ? setOrderCuit("acs")&setOrderCommerce(null):
    orderCuit == "acs" ? setOrderCuit("desc") :
    setOrderCuit(null)
  }

  const handleShowState = ()=>{
    state == null ? setState(true):
    state == true ? setState(false) :
    setState(null)
  }
  const handleChange = (event) => {
      setSearch(event.target.value)
  };

  getCommerces({search, orderCommerce, orderCuit,state})
  return (

      <Box
        h="max-content"
        >

        <SearchBar handleChange={handleChange}/>
        <CommercesList 
        handleOrderByCommerce={handleOrderByCommerce}  
        handleOrderByCuit={handleOrderByCuit}
        handleShowState={handleShowState}/>

      </Box>

  )
}

export default App
