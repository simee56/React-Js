import './App.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";


function App() {
  const auth = getAuth(app);

  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "pandeysimee7@gmail.com",
      "abpusa"
    )
      .then((value) => console.log(value))
  };

  return (
    <div className="App">
      <h1>Signup Page</h1>
      <SignUpPage />
      <SignInPage />
    </div>
  );
}
export default App;
