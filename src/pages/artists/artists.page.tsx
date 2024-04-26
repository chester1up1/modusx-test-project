import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

const ArtistsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Артисти</title>
      </Helmet>
      <article>Артисти</article>
    </HelmetProvider>
  )
}

export default ArtistsPage
