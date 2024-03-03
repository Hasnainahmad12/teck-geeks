import { ApiSlice } from "../ApiSlice";

export const PlanSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addOperatingSystem: builder.mutation({
            query: (body) => ({
                url: "/add-operating",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Plan"],
        }),
        getOperatingSystem: builder.query({
            query: () => ({
                url: "/get-operating",
                method: "GET",

            }),
            providesTags: ["Plan"],
        }),

        updateOperatingSystem: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/update-operating/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Plan"],
        }),
        deleteOperatingSystem: builder.mutation({
            query: (id) => ({
                url: `/delete-operating/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Plan"],
        }),
    }),
});

export const {
  useAddOperatingSystemMutation,
  useGetOperatingSystemQuery,
  useUpdateOperatingSystemMutation,
  useDeleteOperatingSystemMutation,
} = PlanSlice;
