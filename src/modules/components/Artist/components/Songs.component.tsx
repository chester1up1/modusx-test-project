import React, { FC, useCallback, useState } from "react"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useGetArtistsSonsByIdQuery } from "lib/services/artist"
import { SongType } from "lib/services/types"
import SongComponent from "modules/components/Song/Song.component"
import SongsSkeleton from "modules/skeletons/SongsList.skeleton"
import { RootState } from "store"

import PaginationComponent from "./Pagination.component"

import styles from "../styles.module.scss"

interface SongsComponentInterface {
  id: string
}

const SongsComponent: FC<SongsComponentInterface> = ({ id }) => {
  const [pageIndex, setPageIndex] = useState<number>(1)

  const favorites = useSelector(
    (state: RootState) => state.favorites.songs,
    () => true
  )

  const { isLoading, isFetching, data } = useGetArtistsSonsByIdQuery({
    id,
    page: pageIndex,
  })

  const songs = useMemo(() => {
    if (data != null)
      return data.reduce((acc, song) => {
        const exist = favorites.find((item) => item.id === song.id)
        acc.push({ ...song, isFavorite: Boolean(exist) })

        return acc
      }, [] as SongType[])
  }, [data])

  const selectPage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => setPageIndex(value),
    []
  )

  if (isLoading) return <SongsSkeleton />

  if (songs != null)
    return (
      <section className={styles.songs}>
        <div>
          {songs.map((song) => (
            <SongComponent key={`song__key-${song.id}`} {...song} />
          ))}
        </div>
        <PaginationComponent {...{ id, selectPage, isFetching }} />
      </section>
    )

  return <></>
}

export default SongsComponent
