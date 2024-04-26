import { FC } from "react"
import { NavLink } from "react-router-dom"
import { FavoriteRounded } from "@mui/icons-material"
import { RouterPath } from "pages/router"

const FavoriteButton: FC = () => {
  return (
    <NavLink to={RouterPath.Favorites}>
      <FavoriteRounded htmlColor="red" />
    </NavLink>
  )
}

export default FavoriteButton
