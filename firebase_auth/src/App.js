import './App.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

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
      <button onClick={signupUser}>Create User</button>
    </div>
  );
}

export default App;
