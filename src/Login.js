import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core"
import {auth, provider} from "./firebase"
import { useStateValue } from './Stateprovider';
import { actionTypes } from './reducer';


function Login() {
/*TO HAVE THE USER AT A GLOBAL LEVEL TO BE USED IN ANY COMPONENT, WE ADD REACT CONTEXT API*/

    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result); /*remove before deploy*/
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch( error => {
                alert(error.message);
            })

    }

    return (
        <div className="login">
            <div className = "login__container">
                <img 
                    src = "https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                    alt = ""
                />
                <h1 className = "text__font"> Sign in to MP Headquarters</h1>
                <p className = "text__font">mp.slack.com</p>
                <Button onClick = {signIn} className = "text__font">Sign In with Google</Button>

            </div>
        </div>
    )
}

export default Login
