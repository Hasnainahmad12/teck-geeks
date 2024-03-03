import { ApiSlice } from "../ApiSlice";

export const PlanSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addHardDesk: builder.mutation({
            query: (body) => ({
                url: "/add-hardisk",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Plan"],
        }),
        getHardDesk: builder.query({
            query: () => ({
                url: "/get-hardisk",
                method: "GET",

            }),
            providesTags: ["Plan"],
        }),

        updateHardDesk: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/update-hardisk/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Plan"],
        }),
        deleteHardDesk: builder.mutation({
            query: (id) => ({
                url: `/delete-hardisk/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Plan"],
        }),
    }),
});

export const {
    useAddHardDeskMutation,
    useGetHardDeskQuery,
    useUpdateHardDeskMutation,
    useDeleteHardDeskMutation,
} = PlanSlice;
