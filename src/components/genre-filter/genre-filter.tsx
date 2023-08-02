import { type Component, component$, useSignal, type Signal } from "@builder.io/qwik"
import { GenreFilterActiveClass, GenreFilterClass } from "./genre-filter.css";

type GenreFilterProps = {
  filters : string[],
  selected : Signal<string>
}

export const GenreFilter : Component<GenreFilterProps> = component$(({ filters, selected }) => {
  const selectedFilterIndex = useSignal(0);
  
  return (<div style = {{
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    paddingLeft : "20px",
    paddingRight : "20px",
    justifyContent  : "space-between",
    position : "relative"
  }}>
    <div style = {{
      display : "flex",
      flexShrink : 1,
      flexGrow : 1,
      justifyContent : "space-between",
    }}>{
      filters.map((filter, index) => (<div class = {
        selectedFilterIndex.value === index ? GenreFilterActiveClass : GenreFilterClass
      } style = {{
        fontFamily : "Poppins",
        fontSize : "12px",
        color : selectedFilterIndex.value === index ? "rgb(21, 9, 122)" : "rgb(0, 9, 137)",
        fontWeight : selectedFilterIndex.value === index ? 600 : 300,
        userSelect : "none",
        whiteSpace : "nowrap",
        transition : "font-weight 0.15s ease-in-out",
      }} key = { filter } onClick$ = {(e) => {
        selectedFilterIndex.value = index;
        (e.target as HTMLDivElement).scrollIntoView({ behavior : "smooth" });
        selected.value = filter;
      }}>
        { filter }
      </div>))
    }</div>
    <div style = {{
      width : "1px",
      height : "13px",
      marginLeft : "34px",
      backgroundColor : "rgb(216, 216, 216)",
    }}>
    </div>
    <div style = {{
      display : "flex",
      fontSize : "12px",
      paddingLeft : "8px",
      paddingRight : "18px",
      fontFamily : "Poppins",
      color : "rgb(21, 9, 122)"
    }}>
      Filter
    </div>
  </div>)
})