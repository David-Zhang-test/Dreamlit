import { type Component, component$, useSignal, useVisibleTask$, } from "@builder.io/qwik";
import { CarouselLeftButton } from "./carousel-left-button";
import { CarouselRightButton } from "./carousel-right-button";
import { CarouselItem } from "./carousel-item";

type CarouselProps = {
  images : string[],
}

export const Carousel : Component<CarouselProps> = component$(({ images }) => {
  const currentImage = useSignal(0);
  const manualScrollTrigger = useSignal(false);
  // eslint-disable-next-line
  const refs = images.map(() => useSignal(undefined as (HTMLDivElement | undefined)));

  useVisibleTask$(({ track, cleanup }) => {
    track(() => manualScrollTrigger.value);

    const handle = setInterval(() => {
      const nextImage = (currentImage.value + 1) % images.length;
      currentImage.value = nextImage;
      // make sure that the y position does not change
      refs[nextImage].value?.scrollIntoView({ behavior : "smooth", block : "nearest" });
    }, 3000)

    cleanup(() => {
      clearInterval(handle);
    })
  })

  return (<div style = {{
    paddingBottom : "14px",
  }}>
    <div style = {{
      display : "flex",
      flexWrap : "nowrap",
      paddingTop : "20px",
    }}>
      <div style = {{
        display : "flex",
        width : "100%",
        height : "275px",
        position : "relative",
      }}>
        <div style = {{
          position : "absolute",
          display : "flex",
          width : "20px",
          height : "100%",
          alignItems : "center",
          justifyContent : "center",
          zIndex : 10,
        }} onClick$ ={() => {
          currentImage.value = (currentImage.value - 1 + images.length) % images.length;
          refs[currentImage.value].value?.scrollIntoView({ behavior : "smooth" });
          manualScrollTrigger.value = !manualScrollTrigger.value;
        }}>
          <CarouselLeftButton />
        </div>
        <div style = {{
          position : "absolute",
          display : "flex",
          flexGrow : 1,
          overflowX : "hidden",
          paddingBottom : "20px",
          height : "100%"
        }}>{
          images.map((url, i) => <CarouselItem src = { url } key = { url } ref = { refs[i] }/>)
        }</div>
        <div style = {{
          position : "absolute",
          display : "flex",
          width : "20px",
          height : "100%",
          right : 0,
          alignItems : "center",
          justifyContent : "center",
        }} onClick$ ={() => {
          currentImage.value = (currentImage.value + 1) % images.length;
          refs[currentImage.value].value?.scrollIntoView({ behavior : "smooth" });
          manualScrollTrigger.value = !manualScrollTrigger.value;
        }}>
          <CarouselRightButton />
        </div>
      </div>
    </div>
    <div style = {{
      display : "flex",
      justifyContent : "center",
      paddingTop : "10px",
    }}>{
      images.map((image, index) => {
        return (<div style = {{
          background : index === currentImage.value ? "rgb(200, 75, 106)" : "rgb(196, 196, 196)",
          width : index === currentImage.value ? "9px" : "6px",
          height : "6px",
          margin : "3px",
          borderRadius : "100000px",
          transition : "all 0.3s ease-in-out",
        }} key = { image }></div>)
      })
    }</div>
  </div>)
})