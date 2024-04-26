import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

const ArtistPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Артист</title>
      </Helmet>
      <article>Артист</article>
    </HelmetProvider>
  )
}

export default ArtistPage
