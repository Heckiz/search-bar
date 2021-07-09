import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from './helpers';
import axios from 'axios';

export const getDataCommerces = createAsyncThunk('commerces/getData', async ({ search, orderCommerce, orderCuit, stateActive, nextPage }, { getState }) => {
  const state = getState().commerces;

  let sortOrder = '', stateFilter = '', page = state.page, pagePerPage = state.pagePerPage;

  if (orderCommerce) sortOrder = `&_sort=commerce&_order=${orderCommerce}`;
  if (orderCuit) sortOrder = `&_sort=cuit&_order=${orderCuit}`;

  if (stateActive != null) stateFilter = `&active=${stateActive}`;
  if (nextPage != null) page = nextPage;
  const fullParams = `${API_BASE_URL}/?q=${search}${sortOrder}${stateFilter}&_page=${page}&_limit=${pagePerPage}`

  console.log(fullParams)

  const { data } = await axios.get(fullParams);

  return {
    data: data,
    page: page
  };
}
);

const commercesSlice = createSlice({
  name: 'commerces',
  initialState: {
    data: [],
    page: 1,
    pages: 10,
    pagePerPage: 10,
    total: 100,
    status: null
  },
  extraReducers: {
    [getDataCommerces.pending]: (state) => {
      state.status = "loading";
    },
    [getDataCommerces.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.page = action.payload.page;
      state.status = "success";
    },
    [getDataCommerces.rejected]: (state) => {
      state.status = "failed";
    },
  },
})

export const selectAllCommerces = ({ commerces }) => commerces;

export default commercesSlice.reducer
