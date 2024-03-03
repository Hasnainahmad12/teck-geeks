import { ApiSlice } from "../ApiSlice"

const AdminSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAdmins: builder.query({
            query: () => "/admin",
            providesTags: ["admin"]
        }),
        getAdmin: builder.query({
            query: (id) => `/admin/${id}`,
        }),
        
        loginAdmin: builder.mutation({
            query: (body) => ({
                url: "/adminLogin",
                method: "POST",
                body,
            }),
        }),
        addAdmin: builder.mutation({
            query: (body) => ({
                url: "/admin/create",
                method: "POST",
                body,

            }),
            invalidatesTags: ["admin"]
        }),
        updateAdmin: builder.mutation({
            query: ({ id, body }) => ({
                url: `/admin/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["admin"]
        }),
        deleteAdmin: builder.mutation({
            query: (id) => ({
                url: `/admin/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["admin"]
        }),
    }),
})

export const {
    useGetAdminsQuery,
    useGetAdminQuery,
    useAddAdminMutation,
    useUpdateAdminMutation,
    useDeleteAdminMutation,
    useLoginAdminMutation,
} = AdminSlice
