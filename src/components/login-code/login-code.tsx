import { type Component, component$, useSignal, useVisibleTask$, type Signal } from "@builder.io/qwik";
import { LoginCodeInputClass } from "./login-code.css";

type LoginCodeProps = {
    label : string,
    length : number,
    value : Signal<string>
}


export const LoginCode : Component<LoginCodeProps> = component$((props) => {
    // eslint-disable-next-line
    // values.forEach(v => console.log(v.value));
    const ref = useSignal<HTMLDivElement | undefined>(undefined);
    const values = useSignal<string[]>(Array(props.length).fill(""));

    useVisibleTask$(({ cleanup }) => {
        if (ref.value) {
            const handleInput = (e : InputEvent) => {
                if (isNaN(Number(e.data))) {
                    e.preventDefault();
                    return;
                }

                const target = (e.target) as HTMLInputElement;
                let focusEl : HTMLInputElement | null = null;
                let changeEl : HTMLInputElement;

                if (e.data === null) {
                    if (target.value === "" && target.previousElementSibling !== null) {
                        focusEl = changeEl = target.previousElementSibling as HTMLInputElement;
                    } else {
                        focusEl = changeEl = target;
                    }
                } else {
                    focusEl = target.nextElementSibling as (HTMLInputElement | null)
                    changeEl = target;
                }

                focusEl?.focus();
                changeEl.value = e.data as string;
                values.value[(changeEl.dataset.key as any)] = e.data as string;

                props.value.value = values.value.join("")
                console.log(props.value.value)

                e.preventDefault();
            }

            ref.value.addEventListener("beforeinput", handleInput)
            cleanup(() => {
                ref.value?.removeEventListener("beforeinput", handleInput);
            })
        }
    })

    return (<div style = {{
        paddingBottom : "20px",
        // padding
    }}>
        <div style = {{
            color : "white",
            paddingBottom : "10px",
            fontSize : "15px",
            width : "75vw",
        }}>{ props.label }</div><div style = {{
            display : "flex",
            justifyContent : "space-between",
        }} ref = { ref }>{
            Array.from({ length : props.length }, (_, i) => (<input style = {{
                backgroundColor : "rgba(237, 237, 237, 0.5)",
                borderRadius : "20px",
                width : "60px",
                height : "60px",
                textAlign : "center",
                fontSize : "25px",
                fontWeight : 600,
                caretColor : "transparent",
                boxSizing : "border-box",
            }} class = { LoginCodeInputClass } maxLength = { 1 } key = { i } data-key = { i } />))
        }</div>
    </div>)
})