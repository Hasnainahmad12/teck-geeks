import { ApiSlice } from '../ApiSlice';

export const HistorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHistory: builder.query({
            query: () => `/tranactionHistory`,
            providesTags: ["history"]
        }),
        deleteHistory: builder.mutation({
            query: (id) => ({
                url: `/tranactionHistory/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["history"]
        })
    }),
})

export const {
    useGetHistoryQuery,
    useDeleteHistoryMutation
} = HistorySlice;