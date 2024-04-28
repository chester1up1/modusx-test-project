import React from "react"
import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { Navigate } from "react-router-dom"
import { Typography } from "@mui/material"
import { useGetArtistByIdQuery } from "lib/services/artist"
import ArtistSkeleton from "modules/skeletons/Artist.skeleton"
import { RouterPath } from "pages/router"

import styles from "../styles.module.scss"

interface ArtistInfoInterface {
  id: string
}

const ArtistInfo: FC<ArtistInfoInterface> = ({ id }) => {
  const { isLoading, data } = useGetArtistByIdQuery(id)

  if (isLoading) return <ArtistSkeleton />

  if (data != null)
    return (
      <section className={styles.artistInfo}>
        <Helmet>
          <title>{data[0].name}</title>
        </Helmet>
        <img src={data[0].avatar} alt={data[0].name} />
        <Typography variant="h5">{data[0].name}</Typography>
      </section>
    )

  return <Navigate to={RouterPath.Home} />
}
export default ArtistInfo
