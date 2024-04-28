import React from "react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import type { ArtistType } from "lib/services/types"
import { RouterPath } from "pages/router"

const ArtistCardComponent: FC<ArtistType> = ({ avatar, name, id }) => {
  const navigate = useNavigate()

  const forwardToArtist = () => navigate(`${RouterPath.Artist}/${id}`)

  return (
    <Card onClick={forwardToArtist} component="article">
      <CardMedia image={avatar} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ArtistCardComponent
