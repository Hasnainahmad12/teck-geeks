import { ApiSlice } from "../ApiSlice";

export const SliderSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addSlider: builder.mutation({
            query: (body) => ({
                url: "/add-slider",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Slider"],
        }),
        getSlider: builder.query({
            query: () => ({
                url: "/get-allslider",
                method: "GET",

            }),
            providesTags: ["Slider"],
        }),

        updateSlider: builder.mutation({
            query: (args) => {
                const { id, data } = args;
                return {
                    url: `/slider/${id}`,
                    method: "PUT",
                    body: data,
                };

            },
            invalidatesTags: ["Slider"],
        }),
        deleteSlider: builder.mutation({
            query: (id) => ({
                url: `/slider/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Slider"],
        }),
    }),
});

export const {
    useAddSliderMutation,
    useGetSliderQuery,
    useUpdateSliderMutation,
    useDeleteSliderMutation,
} = SliderSlice;
