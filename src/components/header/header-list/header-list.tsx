import { component$ } from "@builder.io/qwik"
import { HeaderItem } from "./header-item"
import { HeaderDreamButton } from "./header-list-button/header-dream-button"
import { HeaderHomeButton } from "./header-list-button/header-home-button"
import { HeaderUserButton } from "./header-list-button/header-user-button"
import { HeaderHelpButton } from "./header-list-button/header-help-button"
import { HeaderAboutButton } from "./header-list-button/header-about-button"
import type {
  Component,
  Signal
} from "@builder.io/qwik";
import { headerBackdropClass, headerListClass } from "./header-list.css"

type HeaderListProps = {
  active : Signal<boolean>
}

export const HeaderList : Component<HeaderListProps> = component$((props) => {
  return (<>
    <div class = { headerListClass } data-active = { props.active.value.toString() }>
      <HeaderItem href = "/">
        <HeaderHomeButton q:slot = "icon" />
        Home
      </HeaderItem>
      <HeaderItem href = "/dream">
        <HeaderDreamButton q:slot = "icon" />
        New Dream
      </HeaderItem>
      <HeaderItem href = "/user">
        <HeaderUserButton q:slot = "icon" />
        My Profile
      </HeaderItem>
      <HeaderItem href = "/help">
        <HeaderHelpButton q:slot = "icon" />
        Help
      </HeaderItem>
      <HeaderItem href = "/about">
        <HeaderAboutButton q:slot = "icon" />
        About
      </HeaderItem>
    </div>
    <div class = { headerBackdropClass } style = {{
      visibility : props.active.value ? 'visible' : 'hidden',
    }} onClick$ = {() => {
      props.active.value = false;
    }} />
  </>)
})