import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase"
import './App.css'

const fireStore = getFirestore(app);

function App() {

  const writeData = async() => {
    const result = await addDoc(collection(fireStore, "Cities"), {
      name :"Delhi",
      pincode : 123
    });
    console.log("Result", result)
  };

  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
    </div>
  );
}

export default App;
