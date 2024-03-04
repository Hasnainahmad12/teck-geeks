import { ApiSlice } from "../ApiSlice";

export const RamSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addRam: builder.mutation({
            query: (body) => ({
                url: "/add-ram",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Ram"],
        }),
        getRam: builder.query({
            query: () => ({
                url: "/get-ram",
                method: "GET",

            }),
            providesTags: ["Ram"],
        }),
        getRamById: builder.query({
            query: (id) => ({
                url: `/get-rambyid/${id}`,
                method: "GET",
            }),
        }),
        updateRam: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/update-ram/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Ram"],
        }),

        deleteRam: builder.mutation({
            query: (id) => ({
                url: `/delete-ram/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Ram"],
        }),
    }),
});

export const {
    useAddRamMutation,
    useGetRamQuery,
    useGetRamByIdQuery,
    useUpdateRamMutation,
    useDeleteRamMutation,
} = RamSlice;
