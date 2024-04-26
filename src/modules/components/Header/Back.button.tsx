import React from "react"
import { FC } from "react"
import { ArrowBackIosNewOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

interface BackButtonInterface {
  navigateToHome: () => void
  isHomePage: boolean
}

const BackButton: FC<BackButtonInterface> = ({
  navigateToHome,
  isHomePage,
}) => {
  return (
    <IconButton
      aria-label="back"
      color="primary"
      onClick={navigateToHome}
      sx={{
        visibility: isHomePage ? "hidden" : "none",
      }}
    >
      <ArrowBackIosNewOutlined htmlColor="black" />
    </IconButton>
  )
}

export default BackButton
