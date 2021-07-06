import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import SearchBar from './components/SearchBar';
import CommercesList from './components/Table/CommercesList';

function App() {

  return (
    <Provider store={store}>
      <SearchBar/>
      <CommercesList/>
    </Provider>
  )
}

export default App
