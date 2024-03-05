import { ApiSlice } from "../ApiSlice";

export const CategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCategory: builder.mutation({
            query: (body) => ({
                url: "/add-category",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Category"],
        }),
        getCategory: builder.query({
            query: () => ({
                url: "/get-category",
                method: "GET",

            }),
            providesTags: ["Category"],
        }),

        updateCategory: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/update-category/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Category"],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/delete-category/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Category"],
        }),
    }),
});

export const {
    useAddCategoryMutation,
    useGetCategoryQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = CategorySlice;
