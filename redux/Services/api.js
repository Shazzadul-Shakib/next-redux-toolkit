import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ()=>'products'
    }),
    getIphone: builder.query({
      query:(product)=>`/products/search?q=${product}`
    })
  }) 
});

export const { useGetAllProductsQuery,useGetIphoneQuery } = api;