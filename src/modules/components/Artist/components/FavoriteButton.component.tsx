import React, { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { addSong, deleteSong } from "lib/features/favorites/slice"
import { SongType } from "lib/services/types"

const FavoriteButtonComponent: FC<SongType> = (song) => {
  const { id, isFavorite } = song

  const [favotiteState, setFavotiteState] = useState<boolean>(isFavorite)

  const dispatch = useDispatch()

  const handleFavoriteSwitch = () =>
    setFavotiteState((prev) => {
      dispatch(!prev ? addSong(song) : deleteSong(+id))
      return !prev
    })

  const FavoriteIcon = favotiteState ? (
    <FavoriteRounded htmlColor="red" />
  ) : (
    <FavoriteBorderRounded />
  )

  return (
    <IconButton aria-label="favorite" onClick={handleFavoriteSwitch}>
      {FavoriteIcon}
    </IconButton>
  )
}

export default FavoriteButtonComponent
