import { type Component, component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type FooterLinkProps = {
  href : string
}

export const FooterLink : Component<FooterLinkProps> = component$((props) => {
  return <Link href = { props.href }>
    <Slot name = "icon" />
    <Slot />
  </Link>
})