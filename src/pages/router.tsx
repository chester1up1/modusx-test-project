import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainLayout from "modules/layouts/Main.layout"

import ArtistPage from "./artist/artist.page"
import ArtistsPage from "./artists/artists.page"
import FavoritesPage from "./favorites/favorites.page"

enum RouterPath {
  Home = "/",
  Artist = "/artist",
  Favorites = "/favorites",
}

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouterPath.Home} element={<MainLayout />}>
          <Route index element={<ArtistsPage />} />
          <Route path={`${RouterPath.Artist}/:id`} element={<ArtistPage />} />
          <Route path={RouterPath.Favorites} element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export { RouterComponent, RouterPath }
