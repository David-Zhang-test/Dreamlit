import { component$ } from "@builder.io/qwik"

export const HomeButton = component$(() => {
	return (<div style = {{
		display : "flex",
		padding : "6px",
		borderRadius : "50%",
		background : "linear-gradient(180.00deg, rgb(255, 255, 255) 37.405%,rgb(255, 255, 255) 88.55%,rgb(183, 223, 200) 100%)",
		boxShadow : "3px 4px 4px rgba(0, 71, 137, 0.25)"
	}}>
		<svg width="28" height="28" viewBox="0 0 29.0908 26.4224" xmlns="http://www.w3.org/2000/svg">
			<path d="M23.8018 26.4224L5.28906 26.4224C4.93848 26.4224 4.60254 26.2803 4.35449 26.0283C4.10645 25.7764 3.9668 25.4341 3.9668 25.0776L3.9668 12.9746L0 12.9746L13.6553 0.350098C13.8994 0.125 14.2168 0 14.5459 0C14.875 0 15.1924 0.125 15.4355 0.350098L29.0908 12.9746L25.124 12.9746L25.124 25.0776C25.124 25.4341 24.9844 25.7764 24.7363 26.0283C24.4883 26.2803 24.1523 26.4224 23.8018 26.4224ZM6.61133 23.7329L22.4795 23.7329L22.4795 10.4961L14.5459 3.16211L6.61133 10.4961L6.61133 23.7329ZM14.5459 18.3535C13.6689 18.3535 12.8281 17.9995 12.208 17.3691C11.5879 16.7383 11.2393 15.8833 11.2393 14.9917C11.2393 14.1001 11.5879 13.2451 12.208 12.6147C12.8281 11.9839 13.6689 11.6299 14.5459 11.6299C15.4219 11.6299 16.2627 11.9839 16.8828 12.6147C17.5029 13.2451 17.8516 14.1001 17.8516 14.9917C17.8516 15.8833 17.5029 16.7383 16.8828 17.3691C16.2627 17.9995 15.4219 18.3535 14.5459 18.3535L14.5459 18.3535Z" fill-rule="evenodd" fill="#062C81"/>
		</svg>
	</div>)
})