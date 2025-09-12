import './App.css';
import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "pandeysimee7@gmail.com",
      "abpusa"
    )
      .then((value) => console.log(value))
  };

  if (user == null) {
    return (
      <div className="App">
        <SignUpPage />
        <SignInPage />
      </div>
    );
  }

  return (
    <div className='App'>
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}
export default App;
