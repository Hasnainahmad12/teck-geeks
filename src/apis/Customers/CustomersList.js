import { ApiSlice } from "../ApiSlice";

export const CustomersSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getCustomers: builder.query({
            query: () => ({
                url: "/getUsers",
                method: "GET",

            }),
            providesTags: ["Customer"],
        }),
        updateCustomer: builder.mutation({
            query: (args) => {
                const { id, data } = args
                return {
                    url: `/admin/updateUser/${id}`,
                    method: "PUT",
                    body: data,
                }
            },
            invalidatesTags: ["Customer"],
        }),
        deleteCustomer: builder.mutation({
            query: (id) => ({
                url: `/admin/deleteUser/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Customer"],
        })
    }),
});

export const {
    useGetCustomersQuery,
    useUpdateCustomerMutation,
    useDeleteCustomerMutation
} = CustomersSlice;