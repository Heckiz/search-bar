import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { API_BASE_URL } from './helpers';
import axios from 'axios';

export const getDataCommerces = createAsyncThunk('commerces/getData', async ({ search, orderCommerce, orderCuit, stateActive }, { dispatch }) => {

    let sortOrder = '', stateFilter = '';

    if (orderCommerce) sortOrder = `&_sort=commerce&_order=${orderCommerce}`;
    if (orderCuit) sortOrder = `&_sort=cuit&_order=${orderCuit}`;

    if (stateActive != null) stateFilter = `&active=${stateActive}`

    const fullParams = `${API_BASE_URL}/?q=${search}${sortOrder}${stateFilter}`

    console.log(fullParams)

    
    const {data} = await axios.get(fullParams);

   return data;
}
);

const commercesSlice = createSlice({
    name: 'commerces',
    initialState:{ data:[], status:null},
    extraReducers: {
        [getDataCommerces.pending]: (state) => {
          state.status = "loading";
        },
        [getDataCommerces.fulfilled]: (state, action) => {
          state.data = action.payload;
          state.status = "success";
        },
        [getDataCommerces.rejected]: (state) => {
          state.status = "failed";
        },
      },
})

export const selectAllCommerces = ({commerces}) => commerces.data;

export default commercesSlice.reducer
