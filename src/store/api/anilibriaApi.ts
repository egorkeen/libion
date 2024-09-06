import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre } from "@utils/constants";
import {
  transformParamsToTitleUrl,
  transformParamsToListOfTitlesUrl,
  transformParamsToSearchTitleUrl,
  transformParamsToFeedUrl,
} from "@utils/transformers";
import {
  TitleParams,
  SearchParams,
  TitleResponse,
  ListOfTitlesParams,
  FeedResponse,
  FeedParams,
  SearchResponse,
} from "@utils/types";

export const anilibriaApi = createApi({
  reducerPath: "anilibriaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_ANILIBRIA_API_URL,
  }),
  endpoints: (builder) => ({
    getTitle: builder.query<TitleResponse, TitleParams>({
      query: (params) => transformParamsToTitleUrl(params),
    }),
    getRandomTitle: builder.query<TitleResponse, void>({
      query: () => "title/random",
    }),
    getListOfTitles: builder.query<TitleResponse[], ListOfTitlesParams>({
      query: (params) => transformParamsToListOfTitlesUrl(params),
    }),
    searchTitles: builder.query<SearchResponse, SearchParams>({
      query: (params) => transformParamsToSearchTitleUrl(params),
    }),
    getFeed: builder.query<FeedResponse, FeedParams | void>({
      query: (params) => transformParamsToFeedUrl(params),
    }),
    getGenres: builder.query<Genre[], void>({
      query: () => "genres",
    }),
    getYears: builder.query<string[], void>({
      query: () => "years",
    }),
  }),
});

export const {
  useGetTitleQuery,
  useGetRandomTitleQuery,
  useGetListOfTitlesQuery,
  useGetFeedQuery,
  useGetGenresQuery,
  useGetYearsQuery,
  useLazySearchTitlesQuery,
} = anilibriaApi;
