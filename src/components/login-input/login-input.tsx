import { component$, type Component, type Signal } from "@builder.io/qwik";

type LoginInputProps = {
    label : string,
    ["bind:value"] : Signal<string>
}

export const LoginInput : Component<LoginInputProps> = component$((props) => {
    return (<div style = {{
        paddingBottom : "20px"
        // padding
    }}>
        <div style = {{
            color : "white",
            paddingBottom : "10px",
            fontSize : "15px"
        }}>{ props.label }</div>
        <input style = {{
            backgroundColor : "rgba(237, 237, 237, 0.5);",
            borderRadius : "20px",
            paddingLeft : "20px",
            height : "60px",
            width : "calc(75vw - 20px)",
            fontSize : "20px"
        }} bind:value = { props["bind:value"] }/>
    </div>)
})