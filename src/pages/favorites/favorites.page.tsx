import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useSelector } from "react-redux"
import { Typography } from "@mui/material"
import SongComponent from "modules/components/Song/Song.component"
import { RootState } from "store"

import styles from "./styles.module.scss"
const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.favorites.songs)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Обране</title>
      </Helmet>
      <article className={styles.favorites}>
        {favorites.length ? (
          favorites.map((song) => (
            <SongComponent
              key={`song__key-${song.id}`}
              {...{ ...song, isFavorite: true, withArtistName: true }}
            />
          ))
        ) : (
          <Typography variant="h2" sx={{ fontStyle: "italic" }}>
            You don't have any songs selected yet 💔
          </Typography>
        )}
      </article>
    </HelmetProvider>
  )
}

export default FavoritesPage
