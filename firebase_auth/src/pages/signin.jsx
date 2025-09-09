import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup  } from "firebase/auth";
import { app } from "../firebase";
import { React, useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Signinuser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((value) => console.log("signIn success"))
            .catch((err) => console.log(err));
    }

    const signUpWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
    }
    return (
        <div className="signin-page">
            <h1>Signin Page</h1>
            <label>Enter your email</label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
            />
            <label>Enter your password</label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
            />
            <br />
            <button onClick={signUpWithGoogle}>Login with Google</button>
            <button onClick={Signinuser}>Singin</button>
        </div>
    )
};

export default SignInPage;