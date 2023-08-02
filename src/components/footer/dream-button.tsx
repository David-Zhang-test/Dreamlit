import { component$ } from "@builder.io/qwik"

export const DreamButton = component$(() => {
  return (<div style = {{
    display : "flex",
    padding : "10px",
    borderRadius : "50%",
    background: "linear-gradient(270.00deg, rgb(255, 0, 106),rgb(6, 44, 129) 100%,rgb(54, 209, 241) 100%)",
    boxShadow : "0px 5px 5px rgba(0, 71, 137, 0.25)"
  }}>
    <svg width="30" height="30" viewBox="-1 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.0771 0C4.8457 0 1.61523 22.2925 0 31.8462L3.22754 31.8462C4.30371 26.5391 6.99609 23.6201 11.3076 23.0884C17.7695 22.2925 22.6152 16.7192 24.2305 11.9424L21.8076 10.3501L23.4229 8.75781C25.0381 7.16553 26.6602 4.77686 29.0771 0Z" 
        fill="white"
      />
    </svg>
  </div>)
})