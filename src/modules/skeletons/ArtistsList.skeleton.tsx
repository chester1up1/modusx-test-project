import React from "react"
import { Skeleton } from "@mui/material"
import { Box } from "@mui/system"

const ArtistsListSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{ width: "185px", height: "208px" }}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        sx={{ width: "185px", height: "208px" }}
        animation="wave"
      />
    </Box>
  )
}

export default ArtistsListSkeleton
