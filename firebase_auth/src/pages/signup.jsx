import { React, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const SignUpPage = () => {

    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUSer = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((value) => alert("success"));
    }

    return (
        <div className="signup-page">
            <label>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={"email"}
                type="email"
                required
                placeholder="Enter your email" />

            <label>password</label>
            <input onChange={(e) => setPassword(e.target.value)}
                value={"password"}
                type="password"
                required
                placeholder="Enter your password" />

            <button onClick={createUSer} >SignUP</button>
        </div>
    )
}

export default SignUpPage;