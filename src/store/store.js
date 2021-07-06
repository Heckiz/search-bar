import { configureStore } from '@reduxjs/toolkit';
import commercesReducer from  './commerceSlice'
const store = configureStore({
    reducer: {
        commerces: commercesReducer
    }
});

export default store;