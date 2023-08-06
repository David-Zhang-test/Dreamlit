import { component$ } from "@builder.io/qwik";

export const PhotoButton = component$(() => {
    return (<button style = {{
        display : "flex",
        justifyItems : "center",
        alignItems : "center"
    }}><svg width="42.447266" height="37.000000" viewBox="0 -4 42.4473 37" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <filter id="filter_473_673_dd" x="0.000000" y="0.000000" width="42.447266" height="37.000000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="0" dy="4"/>
                <feGaussianBlur stdDeviation="1.33333"/>
                <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect_dropShadow_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1" result="shape"/>
            </filter>
            <clipPath id="clip473_673">
                <rect id="Stroke 2/photo-image-picture" width="34.447617" height="29.000000" transform="translate(4.000000 0.000000)" fill="white"/>
            </clipPath>
        </defs>
        <g filter="url(#filter_473_673_dd)">
            <g clip-path="url(#clip473_673)">
                <path id="Vector" d="M11.6553 25.375L25.6895 12.0833L32.0684 18.125" stroke="#FFFFFF" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
                <path id="Vector" d="M29.5166 3.625C30.9258 3.625 32.0684 4.70703 32.0684 6.04175L32.0684 22.9583C32.0684 24.293 30.9258 25.375 29.5166 25.375L11.6553 25.375C10.2461 25.375 9.10352 24.293 9.10352 22.9583L9.10352 6.04175C9.10352 4.70703 10.2461 3.625 11.6553 3.625L29.5166 3.625Z" stroke="#FFFFFF" stroke-width="2.000000" stroke-linejoin="round"/>
                <path id="Vector" d="M16.1211 12.0833C15.0635 12.0833 14.207 11.2717 14.207 10.2708C14.207 9.26978 15.0635 8.45825 16.1211 8.45825C17.1777 8.45825 18.0342 9.26978 18.0342 10.2708C18.0342 11.2717 17.1777 12.0833 16.1211 12.0833Z" stroke="#FFFFFF" stroke-width="2.000000" stroke-linejoin="round"/>
            </g>
        </g>
    </svg></button>)
})