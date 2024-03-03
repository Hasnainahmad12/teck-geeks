import { ApiSlice } from '../ApiSlice';

const AddOn = ApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAddOn: build.query({
            query: () => 'addon',

            providesTags: ["addon"]
        }),
        postAddOn: build.mutation({
            query: (data) => ({
                url: '/addon',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["addon"]
        }),
        deleteAddOn: build.mutation({
            query: () => ({
                url: `/addon`,
                method: 'DELETE',
            }),
            invalidatesTags: ["addon"]
        }),
    }),
})

export const { useGetAddOnQuery, usePostAddOnMutation, useDeleteAddOnMutation } = AddOn;