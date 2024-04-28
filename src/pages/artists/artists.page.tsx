import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import ArtistsListComponent from "modules/components/ArtistsList/ArtistsList.components"

const ArtistsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Артисти</title>
      </Helmet>
      <ArtistsListComponent />
    </HelmetProvider>
  )
}

export default ArtistsPage
