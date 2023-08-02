import { component$ } from "@builder.io/qwik"
import { FooterLink } from "./footer-link"
import { DreamButton } from "./dream-button"
import { HomeButton } from "./home-button"
import { UserButton } from "./user-button"

export const Footer = component$(() => {
  return (<div style = {{
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-around",
    backgroundColor : "white",
    paddingTop : "3px",
    paddingBottom : "6px",
    width : "100%",
    position : "fixed",
    bottom : 0,
  }}>
    <FooterLink href = "/">
      <HomeButton />
    </FooterLink>
    <FooterLink href = "/dream">
      <DreamButton />
    </FooterLink>
    <FooterLink href = "/user">
      <UserButton />
    </FooterLink>
  </div>)
})