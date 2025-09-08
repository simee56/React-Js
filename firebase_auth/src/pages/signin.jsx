import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { React, useState } from "react";


const SignInPage = ()=> {
    return (
        <div className="signin-page">
            <h1>Signin Page</h1>
            <label>Enter your email</label>
            <input type="email" placeholder="Enter your email" />
             <label>Enter your password</label>
            <input type="password" placeholder="Enter your password" />
            <button>Singin</button>
        </div>
    )
};

export default SignInPage;