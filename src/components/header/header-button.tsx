import { component$, useSignal } from "@builder.io/qwik";
import { HeaderList } from "./header-list/header-list";

export const HeaderButton = component$(() => {
  const active = useSignal(false);

  return (<div style = {{
    position : "relative",
  }}>
    <HeaderList active = { active }/>
    <div style = {{
      display : "flex",
      background : "linear-gradient(180.00deg, rgb(255, 255, 255) 37.405%,rgb(255, 255, 255) 88.55%,rgb(183, 223, 200) 100%)",
      boxShadow : "3px 4px 4px rgba(0, 71, 137, 0.25)",
      padding : "10px",
      borderRadius : "50%",
      position : "relative",
      zIndex : 1500,
    }} id = "header-button" onClick$ = { () => {
      active.value = !active.value;
    }}>
      <svg width="18" height="18" viewBox="0 0 15.5 13.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 0.75L14.75 0.75" stroke="#15097A" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
        <path id="Vector" d="M0.75 12.75L14.75 12.75" stroke="#15097A" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
        <path id="Vector" d="M0.75 6.75L14.75 6.75" stroke="#15097A" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    </div>
  </div>)
})