import React, { FC } from "react"
import { memo } from "react"
import { Chip, Typography } from "@mui/material"
import type { SongType } from "lib/services/types"

import FavoriteButtonComponent from "../Artist/components/FavoriteButton.component"

import styles from "./styles.module.scss"

interface SongInterface extends SongType {
  withArtistName?: boolean
}

const SongComponent: FC<SongInterface> = (song) => {
  const { name, cover, duration, artistName, withArtistName } = song

  return (
    <article className={styles.song}>
      <FavoriteButtonComponent {...song} />
      <img src={cover} alt={name} />
      <div>
        {withArtistName && (
          <Typography variant="body1">{artistName}</Typography>
        )}
        <div>
          <Typography variant={withArtistName ? "body2" : "body1"}>
            {name}
          </Typography>
          <Chip label={duration} />
        </div>
      </div>
    </article>
  )
}

export default memo(SongComponent)
