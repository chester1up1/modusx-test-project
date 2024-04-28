import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import ArtistComponent from "modules/components/Artist/Artist.component"

const ArtistPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Артист</title>
      </Helmet>
      <ArtistComponent />
    </HelmetProvider>
  )
}

export default ArtistPage
