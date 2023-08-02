import { style } from "styled-vanilla-extract/qwik";

export const headerListClass = style({
  position : "absolute",
  right : "-6px",
  top : "-6px",
  zIndex : 1200,
  display: "flex",
  flexDirection : "column",
  paddingLeft : "14px",
  paddingRight : "14px",
  paddingTop : "4px",
  paddingBottom : "4px",
  borderRadius : "12px",
  boxShadow : "3px 4px 4px rgba(0, 71, 137, 0.25)",
  overflow : "hidden",
  background : "white",
  transition : "opacity 0.15s ease-in-out",
  visibility : "hidden",

  selectors : {
    '&[data-active="true"]' : {
      opacity : 1,
      visibility : "visible",
    },
    '&[data-active="false"]' : {
      opacity : 0,
      transition : "opacity 0.15s ease-in-out, visibility 0s linear 0.15s"
    }
  }
})

export const headerBackdropClass = style({
  position : 'fixed',
  width : '100%',
  height : '100%',
  top : 0,
  left : 0,
  zIndex : 1000,
})