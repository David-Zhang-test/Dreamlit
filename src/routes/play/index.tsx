import { component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { faker } from "@faker-js/faker";
import { HeaderButton } from "~/components/header/header-button";
import { BackButton } from "../../components/dream-icons/back-button";
import { FaceButton } from "../../components/dream-icons/face-button";
import { descriptionInputClass, thoughtInputClass } from "./index.css";
import { NodeIcon } from "../../components/dream-icons/node-icon";
import { PhotoButton } from "../../components/dream-icons/photo-button";
import { PublishButton } from "../../components/dream-icons/publish-button";
import { ShareButton } from "../../components/dream-icons/share-button";
import { UnionButton } from "../../components/dream-icons/union-button";
// import "../../../node_modules/.pnpm/event-source-polyfill@1.0.31/node_modules/event-source-polyfill/src/eventsource"

export const useDreamTitle = routeLoader$(() => {
  // length
  return faker.lorem.words({ min: 2, max: 3 })
})

export default component$(() => {
  const title = useDreamTitle();

  const loc = useLocation();
  console.log(loc.url.searchParams);

  const paragraphs = useStore<string[]>(() => [""]);
  const length = useSignal(faker.number.int({ min: 1200, max: 2400 }))

  const imageUrl = useSignal("");

  const interactions = useStore<string[]>(() => []);
  const interactionsCount = useSignal(3);

  const publishUrl = useSignal(faker.image.url());
  const albumUrls = useStore<string[]>(() => Array.from({ length : faker.number.int({ min : 3, max : 6 })}, () => faker.image.url()));

  const nodeCount = useSignal(faker.number.int({ min : 500, max : 2000 }));
  const isPublishing = useSignal(false);

  useVisibleTask$(async () => {
    const fn = () => {
      paragraphs[paragraphs.length - 1] += faker.lorem.words({ min: 20, max: 50 }) + " ";
      if (paragraphs[paragraphs.length - 1].length > length.value) {
        imageUrl.value = faker.image.url();

        const i_fn = () => {
          interactions[interactions.length] = faker.lorem.sentence({ min: 3, max: 6 })
          console.log(interactions)
          if (interactions.length < interactionsCount.value) {
            setTimeout(i_fn, faker.number.int({ min: 5, max: 10 }))
          }
        }

        setTimeout(i_fn, faker.number.int({ min: 5, max: 10 }))
        return;
      }
      setTimeout(fn, 5)
    }
    setTimeout(fn, 5)

    // create sse connection, with credential stored in header
    // const response = await fetch("http://api.dreamlit.ai/dream/create", {
    //   method : "GET",
    //   headers : {
    //     "Content-Type" : "application/json",
    //     "Authorization" : "Bearer " + localStorage.getItem("token"),
    //   }
    // })

    // const sse = new EventSourcePolyfill("http://api.dreamlit.ai/dream/create", {
    //   method : "POST",
    //   headers : {
    //     "Authorization" : `Bearer ${localStorage.getItem("token")}`
    //   }
    // })

    // console.log(sse)
  })

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
      backgroundColor: "white",
      zIndex : 10000,
    }}>
      <BackButton />
      <div style={{
        fontSize: "18px",
        fontWeight: 600,
      }}>{title.value}</div>
      <HeaderButton />
    </div>
    <div style={{
      padding: "0px 32px",
      fontWeight: 500,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: isPublishing.value ? "hidden" : "scroll",
    }}>
      <div style={{
        fontSize: "14px",
        lineHeight: 1.6,
        paddingBottom: "16px",
        paddingTop: "10px"
      }}>{
          paragraphs[0]
        }</div>
      <div>{imageUrl.value === ""
        ? null
        : <img src={imageUrl.value}
          height="360"
          width="640"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            userSelect: "none",
          }} />}
      </div>
      <div style={{
        display: "flex",
        alignSelf: "flex-end",
        padding: "8px"
      }}>{imageUrl.value === ""
        ? null
        : <FaceButton />
        }</div>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}><div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}>{interactions.map((interaction, index) => (
        <button key={index} style={{
          background: "linear-gradient(180.00deg, rgb(255, 255, 255),rgba(255, 255, 255, 0.81) 80.712%,rgba(183, 223, 200, 0.17) 100%)",
          border: "2px solid rgba(34, 21, 128, 0.68)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "100%",
          margin: "6px 0px",
          padding: "5px 10px",
          borderRadius: "8px",
          fontWeight: 400,
          fontSize: "16px",
          color: "rgb(34, 21, 128)",
          userSelect: "none",
          boxSizing: "border-box",
          textAlign: "center"
        }} onClick$ = {async () => {
          
        }}>{interaction}</button>
      ))}</div>{interactions.length !== interactionsCount.value
        ? null
        : <input class={thoughtInputClass} style={{
          marginTop: "12px",
          borderRadius: "8px",
          height: "37px",
          background: "rgba(216, 216, 216, 0.48)",
          paddingLeft: "13px",
        }} placeholder="I have my own thoughts..." />
        }</div>
      <div style={{
        display : isPublishing.value ? "flex" : "none",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        position: "absolute",
        width: "calc(100% - 20px)",
        height: "100%",
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
        }}>
          <div style = {{
            display: "flex",
            fontSize: "20px",
            fontWeight: 700,
            color: "rgb(0, 9, 137)",
            justifyContent: "center",
            height: "64px",
            alignItems: "center",
            userSelect: "none",
            background: "linear-gradient(180.00deg, rgba(255, 255, 255, 0),rgba(225, 225, 226, 0) 74.046%,rgba(196, 196, 196, 0.34) 100%)",
            flexShrink: 0
          }}>
            Publish
          </div>
          <div style = {{
            display : "flex",
            flexDirection : "column",
            justifyContent : "space-between",
            height : "100%",
            width : "100%",
            position : "relative",
            boxSizing : "border-box"
          }}>
            <div style = {{
              display : "flex",
              flexDirection : "column",
              padding : "0px 16px",
              position : "relative",
              flexGrow : 1,
              boxSizing : "border-box",
              width : "100%"
            }}>
              <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
              }}>
                <div style={{
                  padding: "3px",
                  background: "rgb(237, 237, 237)",
                  boxShadow: "1px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  borderRadius: "5px",
                  marginRight: "20px",
                  marginTop: "10px"
                }}>
                  <img width="191" height="127" src={publishUrl.value} style={{
                    objectFit: "cover",
                    width : "40vw",
                    height : "26vw",
                    borderRadius: "5px"
                  }} />
                </div>
                <div style = {{
                  marginBottom : "-5px"
                }}>
                  <div style={{
                    color: "rgb(21, 9, 122)",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "0px",
                    whiteSpace : "nowrap",
                    userSelect : "none"
                  }}>
                    Node Count
                  </div>
                  <div style = {{
                    display : "inline-flex",
                    flexDirection : "row",
                    alignItems : "center",
                  }}>
                    <NodeIcon />
                    <div style={{
                      paddingLeft : "10px",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "rgb(21, 9, 122)",
                    }}>{ nodeCount.value }</div>
                  </div>

                </div>
              </div>
              <div style = {{
                padding : "10px 0px 3px",

                fontWeight : 400,
                color : "rgb(21, 9, 122)",
                fontSize : "14px",
              }}>
                Select from your dream album
              </div>
              <div style = {{
                display : "flex",
                justifyContent : "flex-start",
                flexWrap : "wrap",
              }}>{
                albumUrls.map((url) => (<img width = "80" height = "50" key = { url } style = {{
                  width : "calc(25% - 10px)",
                  height : "auto",
                  flexShrink : 0,
                  margin : "5px 5px",
                  borderRadius : "5px",
                }} src = { url }/>))
              }</div>
              <div>
                <div style = {{
                  fontWeight : 700,
                  fontSize : "16px",
                  color : "rgb(0, 9, 137)",
                  paddingTop : "10px",
                  paddingBottom : "3px"
                }}>Title</div>
                <input style = {{
                  background : "rgb(237, 237, 237)",
                  width : "100%",
                  padding : "5px 10px",
                  borderRadius : "3px",
                  boxSizing : "border-box"
                }} class = { descriptionInputClass } placeholder = "Title"></input>
                <div style = {{
                  fontWeight : 700,
                  fontSize : "16px",
                  color : "rgb(0, 9, 137)",
                  paddingTop : "10px",
                  paddingBottom : "3px"
                }}>Description</div>
                <textarea placeholder = "description" style = {{
                  resize : "none",
                  width : "100%",
                  background : "rgb(237, 237, 237)",
                  borderRadius : "3px",
                  padding : "5px 10px",
                  boxSizing : "border-box",
                  fontSize : "16px",
                  fontFamily : "Poppins"
                }} class = { descriptionInputClass }></textarea>
                <div style = {{
                  fontWeight : 700,
                  fontSize : "16px",
                  color : "rgb(0, 9, 137)",
                  paddingTop : "10px",
                  paddingBottom : "3px"
                }}>Cover Intro</div>
                <input style = {{
                  fontWeight : 500,
                  background : "rgb(237, 237, 237)",
                  width : "100%",
                  borderRadius : "3px",
                  padding : "5px 10px",
                  boxSizing : "border-box",
                }}></input>
              </div>
              {/* <div>
                <div>Category</div>
                <div></div>
              </div> */}
              <div style = {{
                display : "flex",
                flexDirection : "row",
                justifyContent : "space-between",
                position : "absolute",
                bottom : "0px",
                width : "calc(100% - 32px)",
                boxSizing : "border-box",
                alignItems : "center",
                paddingBottom : "10px"
              }}>
                <button style = {{
                  background : "linear-gradient(180.00deg, rgb(255, 255, 255) 37.405%,rgb(255, 255, 255) 88.55%,rgb(183, 223, 200) 100%)",
                  border : "2px solid rgb(34, 21, 128)",
                  boxShadow : "3px 4px 4px 0px rgba(0, 71, 137, 0.25)",
                  borderRadius : "20px",
                  height : "46px",
                  color : "rgb(0, 9, 137)",
                  padding : "0px 20px",
                  boxSizing : "border-box",
                  marginRight : "20px"
                }}>Save Draft</button>
                <button style = {{
                  height : "53px",
                  flexGrow : 1,
                  background : "linear-gradient(270.00deg, rgb(255, 0, 106),rgb(6, 44, 129) 100%,rgb(54, 209, 241) 100%)",
                  color : "white",
                  fontSize : "18px",
                  fontWeight : 700,
                  boxShadow : "0px 15px 30px 0px rgba(20, 102, 204, 0.16)",
                  borderRadius : "20px"
                }}>Publish</button>
              </div>

            </div>
            <div style = {{
              height : "64px",
              // background : "red",
              width : "100%",
              flexShrink : 0,
              padding : "0px 20px",
              boxSizing : "border-box"
            }} />
          </div>


        </div>
      </div>
      <div style={{
        height: "94px",
        flexShrink: 0,
      }} />
    </div>

    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "rgb(21, 9, 122)",
      width: "100%",
      height: "64px",
      position: "fixed",
      bottom: 0,
      borderRadius: "100000px",
      // have the button cursor
    }}>
      <UnionButton />
      <PhotoButton />
      <PublishButton />
      <div onClick$ = {() => {
        isPublishing.value = !isPublishing.value
      }}>
        <ShareButton />
      </div>
    </div>

  </div>)
})