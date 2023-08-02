import { style } from "styled-vanilla-extract/qwik";

export const GenreFilterClass = style({
  selectors : {
    "&::after" : {
      content : "",
      transition : "width 0.2s ease-in-out",
      background : "linear-gradient(270.00deg, rgb(255, 0, 106),rgb(6, 44, 129))",
      height : "1.5px",
      display : "block",
      marginLeft : "-5%",
      width : "0%"
    }
  }
})

export const GenreFilterActiveClass = style({
  selectors : {
    "&::after" : {
      content : "",
      transition : "width 0.2s ease-in-out",
      background : "linear-gradient(270.00deg, rgb(255, 0, 106),rgb(6, 44, 129))",
      height : "1.5px",
      display : "block",
      marginLeft : "-5%",
      width : "110%"
    }
  }
})