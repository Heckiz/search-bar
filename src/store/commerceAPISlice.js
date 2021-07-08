// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './helpers'

 const commerceApi = createApi({
  reducerPath: 'commerceApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCommerceData: builder.query({
      query: ({search, orderCommerce, orderCuit, stateActive}) =>{
         
        let sortOrder = '', stateFilter = '';

        if (orderCommerce) sortOrder = `&_sort=commerce&_order=${orderCommerce}`;
        if (orderCuit) sortOrder = `&_sort=cuit&_order=${orderCuit}`;
      
        if (stateActive != null) stateFilter = `&active=${stateActive}`

        

    return    `/?q=${search}${sortOrder}${stateFilter}`
    },
    }),
  }),
})

export default commerceApi