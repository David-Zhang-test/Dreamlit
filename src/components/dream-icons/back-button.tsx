import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city"

export const BackButton = component$(() => {
    return (<Link href = "/" style = {{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        background : "linear-gradient(180.00deg, rgb(255, 255, 255) 37.405%,rgb(255, 255, 255) 88.55%,rgb(183, 223, 200) 100%)",
        boxShadow : "3px 4px 4px 0px rgba(0, 71, 137, 0.25)",
        height : "38px",
        width : "38px",
        borderRadius : "20px"
    }}>
        <svg width="20.250000" height="16.642090" viewBox="0 0 20.25 16.6421" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="Vector" d="M9.20508 14.5083L4.26758 9.57104L19 9.57104C19.6904 9.57104 20.25 9.01147 20.25 8.32104C20.25 7.63086 19.6904 7.07104 19 7.07104L4.26758 7.07104L9.20508 2.13379C9.69336 1.64575 9.69336 0.854248 9.20508 0.366211C9.14355 0.305176 9.07812 0.251709 9.00879 0.206055C8.52344 -0.114502 7.86426 -0.0610352 7.4375 0.366211L0.366211 7.43726C-0.12207 7.92529 -0.12207 8.7168 0.366211 9.20483L7.4375 16.2761C7.92578 16.7642 8.7168 16.7642 9.20508 16.2761C9.69336 15.7878 9.69336 14.9963 9.20508 14.5083Z" fill-rule="evenodd" fill="#000989"/>
        </svg>
    </Link>)
})