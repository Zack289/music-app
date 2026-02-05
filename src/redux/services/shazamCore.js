import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = { method: 'GET'};

// fetch('https://api.deezer.com/chart', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'sazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.deezer.com/',
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "X-RapidAPI-Key",
    //     import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
    //   );

    //   return headers;
    // },
  }),

  endpoints: (builder)=>({
    getTopCharts: builder.query({ query: () => 'chart' })
  })
});

export const {
    useGetTopChartsQuery, 
} = shazamCoreApi;
