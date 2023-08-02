import { type Component, component$, useSignal, type Signal } from "@builder.io/qwik";
import { GenreButton } from "./genre-button";

type GenreSelectorProps = {
  genres : string[],
  selected : Signal<string>
}

export const GenreSelector : Component<GenreSelectorProps> = component$(({ genres, selected }) => {
  const selectedGenreIndex = useSignal(0);

  return (<div style = {{
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    paddingLeft : "20px",
    paddingRight : "20px",
    justifyContent : "space-between",
  }}>
    <div style = {{
      display : "flex",
      overflow : "scroll",
      scrollbarWidth : "none",
      flexShrink : 1,
    }}>{
      genres.map((genre, index) => (<div style = {{
        fontFamily : "Poppins",
        fontSize : "12px",
        marginRight : "20px",
        background : selectedGenreIndex.value === index ? "linear-gradient(90.00deg, rgb(6, 44, 129),rgb(255, 0, 106))" : "rgb(6, 44, 129)",
        backgroundClip : "text",
        fontWeight : selectedGenreIndex.value === index ? 800 : 300,
        WebkitBackgroundClip : "text",
        WebkitTextFillColor : "transparent",
        userSelect : "none",
        whiteSpace : "nowrap",
        transition : "font-weight 0.2s ease-in-out",
      }} key = { genre } onClick$ = {(e) => {
        selectedGenreIndex.value = index;
        (e.target as HTMLDivElement).scrollIntoView({ behavior : "smooth" });
        selected.value = genre;
      }}>
        { genre }
      </div>))
    }</div>
    <div style = {{
      display : "flex",
      paddingLeft : "16px",
      paddingRight : "12px",
    }} onclick$ = {() => {
    }}>
      <GenreButton />
    </div>
  </div>)
})