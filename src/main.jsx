import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import api from './store/commerceAPISlice';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
        <ApiProvider api={api}>

    <ChakraProvider>
    <App />
    </ChakraProvider>
    </ApiProvider>

  </React.StrictMode>,
  document.getElementById('root')
)
