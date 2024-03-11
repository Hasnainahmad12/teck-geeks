import { ApiSlice } from "../ApiSlice";

export const ProductsSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (body) => ({
                url: "/add-products",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        getProduct: builder.query({
            query: () => ({
                url: "/get-products",
                method: "GET",

            }),
            providesTags: ["Product"],
        }),

        updateProduct: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/products/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Product"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useAddProductMutation,
    useGetProductQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = ProductsSlice;
