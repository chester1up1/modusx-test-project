import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import { capitalizeFirstLetter } from "helpers/common"
import { RouterPath } from "pages/router"

import BackButton from "./Back.button"
import FavoriteButton from "./Favorite.button"

import styles from "./styles.module.scss"

const HeaderComponent = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isHomePage = pathname === RouterPath.Home

  const title = isHomePage
    ? "Artists"
    : capitalizeFirstLetter(pathname.substring(1))

  const navigateToHome = () => navigate(RouterPath.Home)

  return (
    <header className={styles.header}>
      <div>
        <BackButton
          {...{
            isHomePage,
            navigateToHome,
          }}
        />
        <Typography variant="h1" fontWeight="700">
          {title}
        </Typography>
        <FavoriteButton />
      </div>
    </header>
  )
}

export default HeaderComponent
