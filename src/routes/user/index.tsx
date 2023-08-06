import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
    const nav = useNavigate();

    useVisibleTask$(() => {
        const isAuthorized = localStorage.getItem("isAuthorized")

        if (isAuthorized === null) {
            nav("/user/signin")
        }
    })



    return (<div>
        User
    </div>)
})