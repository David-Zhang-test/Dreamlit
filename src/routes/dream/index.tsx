import { component$ } from "@builder.io/qwik";
import { BackButton } from "~/components/dream-icons/back-button";
import { HeaderButton } from "~/components/header/header-button";
import { DreamSvg } from "./dream-svg";

export default component$(() => {
  return (<div style={{
    fontFamily: "Poppins",
    position: "relative",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  }}>
    <div style={{
      display: "flex",
      position: "sticky",
      justifyContent: "space-between",
      alignItems: "center",
      top: 0,
      left: 0,
      padding: "15px 15px 15px 15px",

      fontWeight: 600,
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "white"
    }}>
      <BackButton />
      <div style={{
        fontSize: "18px",
        fontWeight: 600,
      }}>{}</div>
      <HeaderButton />
    </div>
    <div style={{
      // display : isPublishing.value ? "flex" : "none",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      width: "calc(100% - 20px)",
      height: "calc(100% - 30px)",
      margin: "0px 10px",
      top: 0,
      left: 0,
      boxSizing: "border-box",
      borderRadius: "20px 20px 0px 0px",
      background: "linear-gradient(rgba(21, 9, 122, 0.8), rgba(167, 32, 98, 0.8), rgba(167, 32, 98, 0.2), rgba(167, 32, 98, 0))"
      // zIndex : -1,
    }}>
      <div style={{
        width: "calc(100% - 6px)",
        height: "calc(100% - 3px)",
        borderRadius: "17px 17px 0px 0px",
        background: "white",
        marginTop: "3px",
        marginLeft: "3px",
        display: "flex",
        flexDirection: "column",
        position : "relative"
      }}>
        <div style = {{
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
        }}>
          <DreamSvg />
        </div>
        <div style = {{
          display : "flex",
          color : "rgb(42, 20, 142)",
          fontWeight : 600,
          fontSize : "24px",
          flexDirection : "column",
          alignItems : "center",
          padding : "0px 40px",
          position : "relative",
          flexGrow : 1
        }}>
          <div style = {{
            paddingBottom : "40px"
          }}>
            What's your dream about?
          </div>
          <textarea placeholder = "Input your dream..." style = {{
            resize : "none",
            width : "100%",
            background : "rgb(237, 237, 237)",
            borderRadius : "8px",
            height : "120px",
            padding : "5px 10px",
            boxSizing : "border-box",
            fontSize : "16px",
            fontFamily : "Poppins",
            marginBottom : "40px"
          }}></textarea>
          <button style = {{
            background : "linear-gradient(180.00deg, rgba(226, 226, 227, 0.11) 0.763%,rgb(255, 255, 255) 5.344%,rgb(255, 255, 255) 84.733%,rgba(219, 239, 228, 0.76) 98.473%)",
            fontWeight : 400,
            fontSize : "18px",
            color : "rgb(6, 44, 129)",
            borderRadius : "20px",
            padding : "10px 30px",
            width : "100%",
            marginBottom : "15px",
            boxShadow : "3px 4px 4px 0px rgba(0, 71, 137, 0.25)"
          }}>
            Start Dreaming
          </button>
          <button style = {{
            background : "linear-gradient(180.00deg, rgba(226, 226, 227, 0.11) 0.763%,rgb(255, 255, 255) 5.344%,rgb(255, 255, 255) 84.733%,rgba(219, 239, 228, 0.76) 98.473%)",
            fontWeight : 400,
            fontSize : "18px",
            color : "rgb(6, 44, 129)",
            borderRadius : "20px",
            padding : "10px 30px",
            width : "100%",
            boxShadow : "3px 4px 4px 0px rgba(0, 71, 137, 0.25)"
          }}>
            Something <span style = {{
              color : "rgb(167, 32, 98)"
            }}>Random</span>
          </button>
        </div>
        <div style = {{
          position : "absolute",
          bottom : "0px",
          width : "calc(100% - 80px)",
          margin : "0px 40px",
          paddingBottom : "20px"
        }}>
          <button style = {{
            background : "linear-gradient(180.00deg, rgba(226, 226, 227, 0.11) 0.763%,rgb(255, 255, 255) 5.344%,rgb(255, 255, 255) 84.733%,rgba(219, 239, 228, 0.76) 98.473%)",
            fontWeight : 600,
            fontSize : "18px",
            color : "rgb(167, 32, 98)",
            borderRadius : "20px",
            padding : "10px 30px",
            width : "100%",
            boxShadow : "3px 4px 4px 0px rgba(0, 71, 137, 0.25)"
          }}>
            Quick Tutorial
          </button>
        </div>
      </div>
    </div>
  </div>);
});