import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

export default function ArtistPage() {
  return (
    <HelmetProvider>
      <article>
        <Helmet>
          <title>Артист</title>
        </Helmet>
      </article>
    </HelmetProvider>
  )
}
