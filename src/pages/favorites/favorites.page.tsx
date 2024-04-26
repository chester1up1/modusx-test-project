import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

const FavoritesPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Обране</title>
      </Helmet>
      <article>Обране</article>
    </HelmetProvider>
  )
}

export default FavoritesPage
