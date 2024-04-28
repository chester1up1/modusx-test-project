import React from "react"
import { Skeleton } from "@mui/material"
import { Box } from "@mui/system"

const SongsSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <Skeleton
          key={`song-skeleton__key-${i}`}
          variant="rectangular"
          sx={{ width: 656, height: 72, borderRadius: "12px" }}
        />
      ))}
    </Box>
  )
}

export default SongsSkeleton
