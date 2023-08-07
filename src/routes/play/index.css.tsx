import { style } from "styled-vanilla-extract/qwik";

export const thoughtInputClass = style({
    selectors : {
        '&::placeholder' : {
            color : "rgba(21, 9, 122, 0.57)",
            fontWeight : 300
        }
    }
})

export const descriptionInputClass = style({
    selectors : {
        '&::placeholder' : {
            color : "rgb(21, 9, 122)",
            fontFamily : "Poppins"
        }
    }
})