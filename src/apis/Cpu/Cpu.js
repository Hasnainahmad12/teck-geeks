import { ApiSlice } from "../ApiSlice";

export const PlanSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCpu: builder.mutation({
            query: (body) => ({
                url: "/add-cpu",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Plan"],
        }),
        getCpu: builder.query({
            query: () => ({
                url: "/get-cpu",
                method: "GET",

            }),
            providesTags: ["Plan"],
        }),

        updateCpu: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/update-cpu/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Plan"],
        }),
        deleteCpu: builder.mutation({
            query: (id) => ({
                url: `/delete-cpu/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Plan"],
        }),
    }),
});

export const {
    useAddCpuMutation,
    useGetCpuQuery,
    useUpdateCpuMutation,
    useDeleteCpuMutation,
} = PlanSlice;
