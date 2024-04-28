import React from "react"
import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import HeaderComponent from "modules/components/Header/Header.component"

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Box
        component="main"
        sx={{
          maxWidth: 720,
          padding: "32px",
          margin: "0 auto",
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default MainLayout
