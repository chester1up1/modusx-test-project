import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import favoritesReducer from "lib/features/favorites/slice"
import { rtkQueryErrorLogger } from "lib/middlewares/rtkQueryErrorLogger"
import { artistApi } from "lib/services/artist"

export const store = configureStore({
  reducer: {
    [artistApi.reducerPath]: artistApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger, artistApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
