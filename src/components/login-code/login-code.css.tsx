import { style } from "styled-vanilla-extract/qwik";

export const LoginCodeInputClass = style({
    selectors : {
        '&:focus' : {
            border : "3px solid white"
        }
    }
})