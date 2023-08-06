import { component$, useSignal } from "@builder.io/qwik";
import { LoginInput } from "~/components/login-input/login-input";
import { Link, useNavigate } from "@builder.io/qwik-city";


export default component$(() => {
    const email = useSignal("");
    const password = useSignal("");
    const nav = useNavigate();

    return (<div style = {{
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        height : "100vh",
        fontFamily : "Poppins",
        color : "white",
        background : "linear-gradient(180.00deg, rgb(4, 10, 100),rgba(56, 12, 115, 0.73) 71.756%,rgba(252, 144, 175, 0.87) 100%,rgba(255, 226, 237, 0.76) 100%)"
    }}>
        <div style = {{
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center",
            backgroundColor : "rgba(255, 255, 255, 0.2)",
            borderRadius : "25px",
            userSelect : "none",
            padding : "0px 20px",
            border : "1px solid rgba(255, 255, 255, 0.77)",
        }}>
                <h1 style = {{
                    fontSize : "30px",
                    lineHeight : "45px",
                    fontWeight : 600,
                }}>Sign In</h1>
            <LoginInput label = "Email" bind:value = { email }/>
            <LoginInput label = "Password" bind:value = { password }/>
            <div style = {{
                alignSelf : "flex-end",
                color : "white",
                fontSize : "15px"
                // marginTop : "-5px"
            }}>
                Reset password
            </div>
            <button style = {{
                fontSize : "20px",
                lineHeight : "30px",
                fontWeight : 700,
                borderRadius : "20px",
                height : "60px",
                width : "75vw",
                border : "none",
                color : "white",
                background : "linear-gradient(90.00deg, rgb(6, 44, 129),rgb(255, 0, 106) 100%)",
                marginTop : "50px",
                marginBottom : "30px"
            }} onClick$ = { async () => {
                // POST api.dreamlit.com:8080/auth/login
                try {
                    const response = await fetch("http://api.dreamlit.ai:8080/auth/login", {
                        method : "POST",
                        headers : {
                            "Content-Type" : "application/json"
                        },
                        body : JSON.stringify({
                            username : email.value,
                            password : password.value
                        })
                    })

                    const json = await response.json();
                    if (json.code !== 10000) {
                        throw json.data
                    }

                    const data = json.data
                    console.log(data)

                    localStorage.setItem("isAuthorized", "true")
                    localStorage.setItem("email", data.username)
                    localStorage.setItem("token", data.token)

                    nav("/user")

                } catch (e) {
                    alert(e)
                }



            }} >Sign in</button>
            <div style = {{
                fontSize : "14px",
                fontWeight : 400,
                paddingBottom : "90px"
            }}>
                Don't have an account?
                <Link href = "/user/signup" style = {{
                    marginLeft : "5px",
                    fontWeight : 700,
                }}>Sign up</Link>
            </div>
        </div>
    </div>)
})