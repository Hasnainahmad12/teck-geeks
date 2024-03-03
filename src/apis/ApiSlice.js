import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://bluemidx.backend.attractgame.com/api',
    baseUrl: 'https://fierce-veil-elk.cyclic.app',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.admin?.data?.accessToken;
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});