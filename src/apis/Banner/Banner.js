import { ApiSlice } from "../ApiSlice";

export const BannerSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBanner: builder.mutation({
            query: (body) => ({
                url: "/add-banner",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Banner"],
        }),
        getBanner: builder.query({
            query: () => ({
                url: "/get-allbanner",
                method: "GET",

            }),
            providesTags: ["Banner"],
        }),

        updateBanner: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/banner/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Banner"],
        }),
        deleteBanner: builder.mutation({
            query: (id) => ({
                url: `/banner/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Banner"],
        }),
    }),
});

export const {
    useAddBannerMutation,
    useGetBannerQuery,
    useUpdateBannerMutation,
    useDeleteBannerMutation,
} = BannerSlice;
