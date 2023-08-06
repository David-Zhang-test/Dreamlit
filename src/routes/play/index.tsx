import { component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { faker } from "@faker-js/faker";
import { HeaderButton } from "~/components/header/header-button";
import { BackButton } from "./back-button";
import { FaceButton } from "./face-button";
import { thoughtInputClass } from "./index.css";
import { PhotoButton } from "./photo-button";
import { PublishButton } from "./publish-button";
import { ShareButton } from "./share-button";
import { UnionButton } from "./union-button";

export const useDreamTitle = routeLoader$(() => {
    // length
    return faker.lorem.words({ min : 2, max : 3 })
})

export default component$(() => {
    const title = useDreamTitle();

    const loc = useLocation();
    console.log(loc.url.searchParams);

    const paragraph = useSignal("");
    const length = useSignal(faker.number.int({ min : 1200, max : 2400 }))

    const imageUrl = useSignal("");

    const interactions = useStore<string []>(() => []);
    const interactionsCount = useSignal(3);

    useVisibleTask$(() => {
        const fn = () => {
            paragraph.value += faker.lorem.words({ min : 20, max : 50 }) + " ";
            if (paragraph.value.length > length.value) {
                imageUrl.value = faker.image.url();

                const i_fn = () => {
                    interactions[interactions.length] = faker.lorem.sentence({ min : 3, max : 6 })
                    console.log(interactions)
                    if (interactions.length < interactionsCount.value) {
                        setTimeout(i_fn, faker.number.int({ min : 5, max : 10 }))
                    }
                }

                setTimeout(i_fn, faker.number.int({ min : 5, max : 10 }))
                return;
            }
            setTimeout(fn, 5)
        }
        setTimeout(fn, 5)
    })

    return (<div style = {{
        fontFamily : "Poppins",
        position : "relative",
        height : "100vh",
        width : "100vw",
        display : "flex",
        flexDirection : "column",
    }}>
        <div style = {{
            display : "flex",
            position : "sticky",
            justifyContent : "space-between",
            alignItems : "center",
            top : 0,
            left : 0,
            padding : "15px 15px 15px 15px",

            fontWeight : 600,
            width : "100%",
            boxSizing : "border-box",
            backgroundColor : "white"
        }}>
            <BackButton />
            <div style = {{
                fontSize : "18px",
                fontWeight : 600,
            }}>{ title.value }</div>
            <HeaderButton />
        </div>
        <div style = {{
            padding : "0px 32px",
            fontWeight : 500,
            display : "flex",
            flexDirection : "column",
            position : "relative",
            overflow : "scroll",
        }}>
            <div style = {{
                fontSize : "14px",
                lineHeight : 1.6,
                paddingBottom : "16px",
                paddingTop : "10px"
            }}>{
                paragraph
            }</div>
            <div>{imageUrl.value === ""
                ? null
                : <img src = { imageUrl.value }
                    height = "360"
                    width = "640"
                    style = {{
                    objectFit : "cover",
                    width : "100%",
                    height : "100%",
                    userSelect : "none",
            }} />}
            </div>
            <div style = {{
                display : "flex",
                alignSelf : "flex-end",
                padding : "8px"
            }}>{imageUrl.value === ""
                ? null
                : <FaceButton />
            }</div>
            <div style = {{
                display : "flex",
                flexDirection : "column",
            }}><div style = {{
                display : "flex",
                flexDirection : "column",
                width : "100%"
            }}>{interactions.map((interaction, index) => (
                <button key = { index } style = {{
                    background : "linear-gradient(180.00deg, rgb(255, 255, 255),rgba(255, 255, 255, 0.81) 80.712%,rgba(183, 223, 200, 0.17) 100%)",
                    border : "2px solid rgba(34, 21, 128, 0.68)",
                    boxShadow : "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    width : "100%",
                    margin : "6px 0px",
                    padding : "5px 10px",
                    borderRadius : "8px",
                    fontWeight : 400,
                    fontSize : "16px",
                    color : "rgb(34, 21, 128)",
                    userSelect : "none",
                    boxSizing : "border-box",
                    textAlign : "center"
                }}>{ interaction }</button>
            ))}</div>{ interactions.length !== interactionsCount.value
                ? null
                : <input class = { thoughtInputClass } style = {{
                marginTop : "12px",
                borderRadius : "8px",
                height : "37px",
                background : "rgba(216, 216, 216, 0.48)",
                paddingLeft : "13px",
            }} placeholder = "I have my own thoughts..." />
            }</div>
            <div style = {{
                backgroundColor : "rgba(255, 255, 255, 0.8)",
                position : "absolute",
                width : "calc(100% - 20px)",
                height : "100%",
                margin : "0px 10px",
                top : 0,
                left : 0,
                boxSizing : "border-box",
                borderRadius : "20px 20px 0px 0px",
                background : "linear-gradient(rgba(21, 9, 122, 0.8), rgba(167, 32, 98, 0.8), rgba(167, 32, 98, 0.2), rgba(167, 32, 98, 0))"
                // zIndex : -1,
            }}>
                <div style = {{
                    width : "calc(100% - 6px)",
                    height : "calc(100% - 3px)",
                    borderRadius : "17px 17px 0px 0px",
                    background : "white",
                    marginTop : "3px",
                    marginLeft : "3px"
                }}></div>
            </div>
            <div style = {{
                height : "94px",
                flexShrink : 0,
            }}/>
        </div>

        <div style = {{
            display : "flex",
            flexDirection : "row",
            alignItems : "center",
            justifyContent : "space-around",
            backgroundColor : "rgb(21, 9, 122)",
            width : "100%",
            height : "64px",
            position : "fixed",
            bottom : 0,
            borderRadius : "100000px",
            // have the button cursor
        }}>
            <UnionButton />
            <PhotoButton />
            <PublishButton />
            <ShareButton />
        </div>

    </div>)
})