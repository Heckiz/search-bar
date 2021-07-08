import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from './helpers';
import axios from 'axios';

export const getDataCommerces = createAsyncThunk('commerces/getData', async ({ search, orderCommerce, orderCuit, stateActive, nextPage }, { getState }) => {

  const state = getState().commerces;

  let sortOrder = '', stateFilter = '', page= state.page, pagePerPage= state.pagePerPage;

  if (orderCommerce) sortOrder = `&_sort=commerce&_order=${orderCommerce}`;
  if (orderCuit) sortOrder = `&_sort=cuit&_order=${orderCuit}`;

  if (stateActive != null) stateFilter = `&active=${stateActive}`

  const fullParams = `${API_BASE_URL}/?q=${search}${sortOrder}${stateFilter}&_page=${page}&_limit=${pagePerPage}`

  console.log(fullParams)
  console.log(nextPage)

  const { data } = await axios.get(fullParams);

  return data;
}
);

const commercesSlice = createSlice({
  name: 'commerces',
  initialState: {
    data: [],
    page: 1,
    pages:100,
    pagePerPage:10,
    total:1000,
    status: null
  },
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

export const selectAllCommerces = ({ commerces }) => commerces;

export default commercesSlice.reducer
