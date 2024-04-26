import { createBrowserRouter } from "react-router-dom"

import ArtistPage from "./artist/artist.page"
import ArtistsPage from "./artists/artists.page"
import FavoritesPage from "./favorites/favorites.page"

enum RouterPath {
  Home = "/",
  Artist = "/artist",
  Favorites = "/favorites",
}

const router = createBrowserRouter([
  {
    path: RouterPath.Home,
    element: <ArtistsPage />,
  },
  {
    path: RouterPath.Artist,
    element: <ArtistPage />,
  },
  {
    path: RouterPath.Favorites,
    element: <FavoritesPage />,
  },
])

export { router, RouterPath }
