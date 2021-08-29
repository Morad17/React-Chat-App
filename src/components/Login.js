import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import "firebase/app"

import { auth } from '../firebase'
import firebase from 'firebase/app'

const Login = () => {
    return (
        <div id="login-page">
            <div className="" id="login-card">
                <h2>Welcome To The Chat!</h2>

                <div className="login-button-google" onClick={() => auth.signInWithRedirect(new FirebaseError.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign In With Google
                </div>
                <div className="login-button-facebook" onClick={() => auth.signInWithRedirect(new FirebaseError.auth.FacebookAuthProvider())}>
                    <FacebookOutlined /> Sign In With Facebook
                </div>
            </div>
        </div>
    )
}

export default Login
