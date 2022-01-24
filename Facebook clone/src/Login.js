import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core"
import {auth , provider} from "./firebase"
import {actionTypes} from "./reducer"
import { useStateValue } from './StateProvider'

const Login = () => {
   const [state , dispatch] = useStateValue()
    const signIn = () => {
     auth
     .signInWithPopup(provider).then((result)=>{
         dispatch({
             type: actionTypes.SET_USER,
             user:result.user
         })
         console.log(result)
     }).catch((error)=>{
         alert(error.message)
     })
    }
    return (
        <div className="login">
             <div className="login_logo">
                 <img src="https://www.seekpng.com/png/detail/265-2657650_facebook-icon-png-facebook.png" alt="facebook" />
                 <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Logo" /> 
             </div>
             <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login
