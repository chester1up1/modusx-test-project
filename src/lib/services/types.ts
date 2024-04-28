export type ArtistType = {
  id: string
  name: string
  avatar: string
  songsCount: number
}

export type InitialSongType = {
  id: string
  name: string
  cover: string
  artistId: string
  artistName: string
  duration: string
}

export type SongType = InitialSongType & {
  isFavorite: boolean
}
