import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

export default function FavoritesPage() {
  return (
    <HelmetProvider>
      <article>
        <Helmet>
          <title>Обране»</title>
        </Helmet>
      </article>
    </HelmetProvider>
  )
}
