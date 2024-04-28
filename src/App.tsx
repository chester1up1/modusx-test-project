import React from "react"
import { ToastContainer } from "react-toastify"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import ErrorBoundary from "modules/components/ErrorBoundary/ErrorBoundary.components"
import { RouterComponent } from "pages/router"
import darkTheme from "theme"

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterComponent />
        <ToastContainer />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
