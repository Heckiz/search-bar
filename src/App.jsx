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
  const [stateActive, setStateActive] = useState(null);
  const [nextPage, setNextPage] = useState(null)
  const handleOrderByCommerce = () => {
    orderCommerce == null ? setOrderCommerce("acs") & setOrderCuit(null) :
      orderCommerce == "acs" ? setOrderCommerce("desc") :
        setOrderCommerce(null)
  };
  const handleOrderByCuit = () => {
    orderCuit == null ? setOrderCuit("acs") & setOrderCommerce(null) :
      orderCuit == "acs" ? setOrderCuit("desc") :
        setOrderCuit(null)
  };
  const handleShowState = () => {
    stateActive == null ? setStateActive(true) :
      stateActive == true ? setStateActive(false) :
        setStateActive(null)
  };
  const handleSearch = (event) => {
    setSearch(event.target.value)
  };
  const handleNextPage = (page) =>{
    setNextPage(page++)
  };
  getCommerces({ search, orderCommerce, orderCuit, stateActive, nextPage })
  return (
    <Box
      h="max-content"
    >
      <SearchBar handleSearch={handleSearch} />

      <CommercesList
        handleOrderByCommerce={handleOrderByCommerce}
        orderCommerce={orderCommerce}

        handleOrderByCuit={handleOrderByCuit}
        orderCuit={orderCuit}

        handleShowState={handleShowState}
        stateActive={stateActive}

        handleNextPage={handleNextPage}
      />

    </Box>

  )
}

export default App
