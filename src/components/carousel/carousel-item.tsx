import { type Component, component$, type Signal } from '@builder.io/qwik';

type CarouselItemProps = {
  src : string,
  ref ?: Signal<HTMLDivElement | undefined>
}

export const CarouselItem : Component<CarouselItemProps> = component$((props) => {
  return (<div ref = { props.ref } style = {{
    display : "flex",
    height : "100%",
    width : "100%",
    flexShrink : 0,
    paddingLeft : "20px",
    paddingRight : "20px",
    boxSizing : "border-box",
  }}>
    <div style = {{
      height : "100%",
      padding : "4px",
      flexGrow : 1,
      boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius : "8px",
      boxSizing : "border-box",
    }}>
      <img src = { props.src }
        // let the warning shut up
        height = "360"
        width = "640"
        style = {{
          objectFit : "cover",
          width : "100%",
          height : "100%",
          borderRadius : "4px",
          userSelect : "none",
        }}></img>
    </div>
  </div>)
})