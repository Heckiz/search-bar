import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './store/store';
import SearchBar from './components/SearchBar';
import CommercesList from './components/Table/CommercesList';

function App() {

  return (
    <Provider store={store}>

      <Box
        d="grid" h="100vh"
        justifyContent="center"
        border="2px solid black"
      >

        <SearchBar />
        <CommercesList />

      </Box>

    </Provider>
  )
}

export default App
