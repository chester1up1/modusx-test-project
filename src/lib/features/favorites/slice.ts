import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { InitialSongType } from "lib/services/types"

interface FavoriteState {
  songs: InitialSongType[]
}

const initialState: FavoriteState = {
  songs: [],
}

export const favoritesSlice = createSlice({
  name: "favorites",

  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<InitialSongType>) => {
      state.songs.push(action.payload)
    },
    deleteSong: (state, action: PayloadAction<number>) => {
      state.songs = state.songs.filter((song) => +song.id !== action.payload)
    },
  },
})

export const { addSong, deleteSong } = favoritesSlice.actions

export default favoritesSlice.reducer
