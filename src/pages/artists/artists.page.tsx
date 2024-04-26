import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

export default function ArtistsPage() {
  return (
    <HelmetProvider>
      <article>
        <Helmet>
          <title>Артисти</title>
        </Helmet>
      </article>
    </HelmetProvider>
  )
}
