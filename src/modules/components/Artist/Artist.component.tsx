import React from "react"
import { Navigate, useParams } from "react-router-dom"
import { RouterPath } from "pages/router"

import ArtistInfo from "./components/Info.component"
import SongsComponent from "./components/Songs.component"

const ArtistComponent = () => {
  const { id } = useParams()

  if (id != null)
    return (
      <div>
        <ArtistInfo {...{ id }} />
        <SongsComponent {...{ id }} />
      </div>
    )

  return <Navigate to={RouterPath.Home} />
}

export default ArtistComponent
