import { toast } from "react-toastify"
import type { Middleware } from "@reduxjs/toolkit"
import { isRejectedWithValue } from "@reduxjs/toolkit"

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn("We got a rejected action!")
    toast.warn(
      `Request error! | ${
        "data" in action.error
          ? (action.error.message as unknown as { message: string }).message
          : action.error.message
      }`
    )
  }

  return next(action)
}
