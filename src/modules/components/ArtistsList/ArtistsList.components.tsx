import React from "react"
import { useGetAllArtistsQuery } from "lib/services/artist"
import ArtistsListSkeleton from "modules/skeletons/ArtistsList.skeleton"

import ArtistCardComponent from "./components/ArtistCard.component"

import styles from "./styles.module.scss"

const ArtistsListComponent = () => {
  const { data, isLoading } = useGetAllArtistsQuery()

  if (isLoading) return <ArtistsListSkeleton />

  return (
    <section className={styles.artistsContainer}>
      {data?.map((artist) => (
        <ArtistCardComponent key={`artist__key-${artist.id}`} {...artist} />
      ))}
    </section>
  )
}

export default ArtistsListComponent
