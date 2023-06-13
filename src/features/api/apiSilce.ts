import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IPost } from '../../models/IPost'


export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getAllProduct: builder.query<IPost,number>({
            query: (limit:number = 5) => ({
                url:"/products",
                params: {
                    _limit:limit
                }
            }),
            providesTags : result => ["Post"]
        }),
        createProduct: builder.mutation<IPost,IPost>({
            query: (post) => ({
                url:"/products",
                method:'POST',
                body:post
            }),
            invalidatesTags: result => ['Post']
        }),
        updateProduct: builder.mutation<IPost,IPost>({
            query: (post) => ({
                url:`/products/${post.id}`,
                method:'PUT',
                body:post
            }),
            invalidatesTags: result => ['Post']
        }),
        deleteProduct: builder.mutation<IPost,IPost>({
            query: (post) => ({
                url:`/products/${post.id}`,
                method:'DELETE',
                body:post
            }),
            invalidatesTags: result => ['Post']
        }),

    }),
})

export const { useGetAllProductQuery,useCreateProductMutation,useUpdateProductMutation,useDeleteProductMutation} = apiSlice