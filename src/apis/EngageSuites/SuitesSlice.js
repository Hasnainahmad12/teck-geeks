import { ApiSlice } from "../ApiSlice";

const EngageSuites = ApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getSuites: build.query({
            query: () => '/engineSuit',
            providesTags: ["Suites"]
        }),
        createSuite: build.mutation({
            query: (data) => ({
                url: `/engineSuit`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Suites"]
        }),
        updateSuite: build.mutation({
            query: ({ id, data }) => ({
                url: `/engineSuit/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ["Suites"]
        }),
        deleteSuite: build.mutation({
            query: (id) => ({
                url: `/engineSuit/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Suites"]
        }),
    }),
})

export const {
    useGetSuitesQuery,
    useCreateSuiteMutation,
    useUpdateSuiteMutation,
    useDeleteSuiteMutation,
} = EngageSuites;