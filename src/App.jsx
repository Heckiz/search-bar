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
        h="max-content"
        border="2px solid red"
      >

        <SearchBar />
        <CommercesList />

      </Box>

    </Provider>
  )
}

export default App
