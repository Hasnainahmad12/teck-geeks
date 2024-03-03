import { ApiSlice } from "../ApiSlice";

export const PlanSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addPlan: builder.mutation({
            query: (body) => ({
                url: "/add-brands",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Plan"],
        }),
        getPlans: builder.query({
            query: () => ({
                url: "/get-brand",
                method: "GET",

            }),
            providesTags: ["Plan"],
        }),

        updatePlan: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/update-brand/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Plan"],
        }),
        deletePlan: builder.mutation({
            query: (id) => ({
                url: `/delete-brand/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Plan"],
        }),
    }),
});

export const {
    useAddPlanMutation,
    useGetPlansQuery,
    useUpdatePlanMutation,
    useDeletePlanMutation
} = PlanSlice;
