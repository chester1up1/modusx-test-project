import React, { FC } from "react"
import { Pagination } from "@mui/material"
import { useGetArtistByIdQuery } from "lib/services/artist"

interface PaginationComponentInterface {
  id: string
  selectPage: (event: React.ChangeEvent<unknown>, value: number) => void
  isFetching: boolean
}

const SONGS_LIMIT = 5

const PaginationComponent: FC<PaginationComponentInterface> = ({
  id,
  selectPage,
  isFetching,
}) => {
  const { data } = useGetArtistByIdQuery(id)

  const pagesCount =
    data != null ? Math.ceil(data[0].songsCount) / SONGS_LIMIT : null

  if (data && pagesCount != null)
    return (
      <Pagination
        count={pagesCount}
        variant="outlined"
        shape="rounded"
        onChange={selectPage}
        disabled={isFetching}
      />
    )

  return <></>
}

export default PaginationComponent
