import React from "react"
import { Skeleton } from "@mui/material"
import { Box } from "@mui/system"

const ArtistSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Skeleton variant="circular" sx={{ width: 128, height: 128 }} />
      <Skeleton
        variant="text"
        sx={{ fontSize: "2rem", width: 184, marginBottom: "24px" }}
      />
    </Box>
  )
}

export default ArtistSkeleton
