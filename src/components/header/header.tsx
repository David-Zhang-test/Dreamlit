import { component$ } from "@builder.io/qwik";
import { HeaderButton } from "./header-button";

export const Header = component$(() => {
  return (<div style = {{
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingLeft : "20px",
    paddingRight : "20px",
    paddingBottom : "8px",
  }}>
    <div style = {{
      background : "linear-gradient(90.00deg, rgb(6, 45, 129), rgb(255, 0, 106))",
      backgroundClip : "text",
      WebkitBackgroundClip : "text",
      WebkitTextFillColor : "transparent",
      fontSize : "40px",
      fontFamily : "Poppins",
      fontWeight : 800,
      paddingTop : "10px",
      whiteSpace : "nowrap",
    }}>
      DreamLit. AI
    </div>
    <div style = {{
      paddingTop : "6px",
    }}>
      <HeaderButton />
    </div>
  </div>)
})