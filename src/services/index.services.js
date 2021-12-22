import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = process.env.REACT_APP_API_KEY;

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.openweathermap.org` }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lon, exclude }) =>
        `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=metric&appid=${apiKey}`,
    }),
  }),
});

export const { useGetWeatherQuery } = baseApi;
