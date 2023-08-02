import { style } from "styled-vanilla-extract/qwik"

export const searchBarInputClass = style({
  selectors : {
    '&::placeholder' : {
      color : "rgba(6, 44, 129, 0.57)",
      fontFamily : "Poppins",
    }
  }
})