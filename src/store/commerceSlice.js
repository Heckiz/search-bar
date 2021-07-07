import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { API_BASE_URL } from './helpers';
import axios from 'axios';

export const getDataCommerces = createAsyncThunk('commerces/getData', async ({search,orderCommerce}, { dispatch }) => {
    console.log('search:',search)
    console.log('orderCommerce:',orderCommerce)
    
    const data = await axios.get(`${API_BASE_URL}/?q=${search}&_sort=commerce&_order=${orderCommerce}`);
    dispatch(setCommerces(data.data));
}
);

const commercesAdapter = createEntityAdapter({
    selectId: ({ id }) => id,
});


const commercesSlice = createSlice({
    name: 'commerces',
    initialState: commercesAdapter.getInitialState(),
    reducers: {
        setCommerces: commercesAdapter.setAll
    },
})

export const { setCommerces } = commercesSlice.actions

export const selectAllCommerces = commercesAdapter.getSelectors((state)=>state.commerces)

export default commercesSlice.reducer