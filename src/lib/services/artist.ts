import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import type { ArtistType, InitialSongType } from "./types"

const BASE_URL = "https://640799f62f01352a8a7faa72.mockapi.io/api"

export const artistApi = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (builder) => ({
    getAllArtists: builder.query<ArtistType[], void>({
      query: () => ({ url: "/artists" }),
    }),

    getArtistById: builder.query<ArtistType[], string | undefined>({
      query: (id) => ({ url: "/artists", params: { id } }),
    }),

    getArtistsSonsById: builder.query<
      InitialSongType[],
      {
        id: string | undefined
        page: number
      }
    >({
      query: ({ id, page }) => ({
        url: `/artists/${id}/songs?page=${page}&limit=5`,
      }),
    }),
  }),
})

export const {
  useGetAllArtistsQuery,
  useGetArtistByIdQuery,
  useGetArtistsSonsByIdQuery,
} = artistApi
