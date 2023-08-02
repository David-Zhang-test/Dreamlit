import { type Component, component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type HeaderItemProps = {
  href : string
}

export const HeaderItem : Component<HeaderItemProps> = component$((props) => {
  return (<Link href = { props.href } style = {{
    display: "flex",
    flexDirection : "row",
    alignItems : "center",
    backgroundColor : "white",
    position : "relative",
    zIndex : 1100,
  }}>
    <div style = {{
      paddingBottom : "10px",
      paddingRight : "12px",
      paddingTop : "10px",
    }}>
      <Slot name = "icon" />
    </div>
    <div style = {{
      color : "rgb(0, 9, 137)",
      fontSize : "16px",
      fontFamily : "Poppins",
      display : "flex",
      whiteSpace : "nowrap",
    }}>
      <Slot />
    </div>
  </Link>)
})