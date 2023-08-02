import { component$ } from "@builder.io/qwik";
import { searchBarInputClass } from "./search-bar.css";
import { SearchButton } from "./search-button";

export const SearchBar = component$(() => {
  return (<div style = {{
    display : "flex",
    paddingLeft : "20px",
    paddingRight : "20px"
  }}>
    <div style = {{
      display : "flex",
      position : "absolute",
      paddingLeft : "13px",
      paddingTop : "9px"
    }}>
      <SearchButton />
    </div>
    <input type = "text" class = { searchBarInputClass } placeholder = "Search for dreams" style = {{
      width : "100%",
      padding : "8px",
      paddingLeft : "40px",
      height : "20px",
      backgroundColor : "rgba(237, 237, 237, 0.5)",
      border : "none",
      borderRadius : "1000000px",
    }}/>
  </div>)
})