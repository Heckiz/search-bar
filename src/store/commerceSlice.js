import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { API_BASE_URL } from './config';
import axios from 'axios';

export const getDataCommerces = createAsyncThunk('commerces/getData', async ({search}, { dispatch }) => {
    console.log(search)
    const data = await axios.get(`${API_BASE_URL}/?q=${search}`);
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