import React from "react"
import { Outlet } from "react-router-dom"
import HeaderComponent from "modules/components/Header/Header.component"

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
