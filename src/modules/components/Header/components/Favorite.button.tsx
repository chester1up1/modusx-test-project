import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { FavoriteRounded } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { RouterPath } from "pages/router"
import { RootState } from "store"

import styles from "../styles.module.scss"

const FavoriteButton = () => {
  const favorites = useSelector((state: RootState) => state.favorites.songs)

  const favoritesCount = favorites.length

  return (
    <NavLink to={RouterPath.Favorites} className={styles.favorites}>
      <Badge
        badgeContent={favoritesCount}
        color="primary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <FavoriteRounded htmlColor="red" />
      </Badge>
    </NavLink>
  )
}

export default FavoriteButton
