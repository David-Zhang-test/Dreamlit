import { component$, useSignal } from "@builder.io/qwik";
import { LoginInput } from "~/components/login-input/login-input";
import { LoginCode } from "~/components/login-code/login-code";
import { useNavigate } from "@builder.io/qwik-city";


export default component$(() => {
    const code = useSignal("")
    const email = useSignal("")
    const password = useSignal("")
    const confirmPassword = useSignal("")
    const nav = useNavigate()

    const isValidated = useSignal(false);

    return (<div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Poppins",
        color: "white",
        background: "linear-gradient(180.00deg, rgb(4, 10, 100),rgba(56, 12, 115, 0.73) 71.756%,rgba(252, 144, 175, 0.87) 100%,rgba(255, 226, 237, 0.76) 100%)"
    }}>
        <div style={{
            display: isValidated.value ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "25px",
            userSelect: "none",
            padding: "0px 20px",
            border: "1px solid rgba(255, 255, 255, 0.77)",
        }}>
            <h1 style={{
                fontSize: "30px",
                lineHeight: "45px",
                fontWeight: 600,
            }}>Sign Up</h1>
            <LoginInput label="Enter your email" bind:value = { email } />
            <LoginCode label="Verification" length = { 4 } value = { code }/>
            <button style={{
                color: "white",
                fontSize: "20px",
                marginTop : "10px",
                fontWeight : 700,
                // marginTop : "-5px"
            }} onClick$ = { async () => {
                try {
                    const response = await fetch("http://api.dreamlit.ai:8080/auth/sendVerifyCode", {
                        method : "POST",
                        headers : {
                            "Content-Type" : "application/json",
                        },
                        body : JSON.stringify({
                            email : email.value
                        })
                    })
                    const json = await response.json()

                    if (json.code !== 10000) {
                        throw json.data
                    }
                } catch (e) {
                    alert(e)
                }
            }}>
                Send Code
            </button>
            <button style={{
                fontSize: "20px",
                fontWeight: 700,
                borderRadius: "20px",
                height: "60px",
                width: "75vw",
                border: "none",
                color: "white",
                background: "linear-gradient(90.00deg, rgb(6, 44, 129),rgb(255, 0, 106) 100%)",
                marginTop: "50px",
                marginBottom: "30px",
                textAlign : "center",
                verticalAlign : "middle",
                lineHeight : "60px"
            }} onClick$ = { async () => {
                // check something
                console.log(email.value, code.value)

                // proceed forward
                isValidated.value = true

                try {
                    const response = await fetch("http://api.dreamlit.ai:8080/auth/verifyEmail", {
                        method : "POST",
                        headers : {
                            "Content-Type" : "application/json",
                        },
                        body : JSON.stringify({
                            email : email.value,
                            code : code.value
                        })
                    })

                    const json = await response.json()

                    if (json.code !== 10000) {
                        throw json.data
                    }

                    localStorage.setItem("signup_token", json.data);
                } catch (e) {
                    alert(e)
                }

            }}>Next</button>
        </div>


        <div style={{
            display: isValidated.value ? "flex" : "none",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "25px",
            userSelect: "none",
            padding: "0px 20px",
            border: "1px solid rgba(255, 255, 255, 0.77)",
        }}>
            <div style = {{
                display : "flex",
                position : "relative",
                width : "100%",
                justifyContent : "center"
            }}>
                <button style = {{
                    position : "absolute",
                    top : 0,
                    left : 0,
                    height : "100%",
                    color : "white",
                    fontWeight : 600
                }} onClick$ = {() => {
                    isValidated.value = false
                }}>
                    Back
                </button>
                <h1 style={{
                    fontSize: "30px",
                    lineHeight: "45px",
                    fontWeight: 600,
                }}>
                    Sign Up
                </h1>
            </div>

            <LoginInput label="Enter your password" bind:value = { password } />
            <LoginInput label="Confirm your password" bind:value = { confirmPassword }/>
            <div style={{
                color: "white",
                fontSize: "20px",
                marginTop : "10px",
                fontWeight : 700,
                opacity : 0,
                // marginTop : "-5px"
            }}>
                Send
            </div>
            <button style={{
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: 700,
                borderRadius: "20px",
                height: "60px",
                width: "75vw",
                border: "none",
                color: "white",
                background: "linear-gradient(90.00deg, rgb(6, 44, 129),rgb(255, 0, 106) 100%)",
                marginTop: "50px",
                marginBottom: "30px"
            }} onClick$ = { async () => {
                try {
                    const response = await fetch("http://api.dreamlit.ai:8080/auth/v2/register", {
                        method : "POST",
                        headers : {
                            "Content-Type" : "application/json",
                        },
                        body : JSON.stringify({
                            email : email.value,
                            password : password.value,
                            token : localStorage.getItem("signup_token")
                        })
                    })

                    const json = await response.json();

                    if (json.code !== 10000) {
                        throw json.data
                    }

                    localStorage.removeItem("signup_token")
                    nav("/user/signin")

                } catch (e) {
                    alert(e)
                }
            }}>Create Account</button>
        </div>
    </div>)
})