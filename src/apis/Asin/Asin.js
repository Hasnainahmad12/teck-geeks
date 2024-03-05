import { ApiSlice } from "../ApiSlice";

export const AsinSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addAsin: builder.mutation({
            query: (body) => ({
                url: "/add-asin",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Asin"],
        }),
        getAsin: builder.query({
            query: () => ({
                url: "/get-asin",
                method: "GET",

            }),
            providesTags: ["Asin"],
        }),
        updateAsin: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/update-asin/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Asin"],
        }),

        deleteAsin: builder.mutation({
            query: (id) => ({
                url: `/delete-asin/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Asin"],
        }),
    }),
});

export const {
    useAddAsinMutation,
    useGetAsinQuery,
    useUpdateAsinMutation,
    useDeleteAsinMutation,
} = AsinSlice;
