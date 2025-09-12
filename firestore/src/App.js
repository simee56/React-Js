import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase"
import './App.css'

const fireStore = getFirestore(app);

function App() {

  const writeData = async () => {
    const result = await addDoc(collection(fireStore, "Cities"), {
      name: "Delhi",
      pincode: 123
    });
    console.log("Result", result)
  };

  // TO CREATE A SUB-COLLECTION.
  const writeSubData = async () => {
    const reusltOfSubData = await addDoc(collection(fireStore, "Cities/BgvFbSuzl5l1ahyzCadr/places"), {
      name: "Noida2",
      pincode: 56
    });
    console.log("Result", reusltOfSubData)
  };

  //TO READ A DOCUMENT 
  const getDocument = async () => {
    const ref = doc(fireStore, "Cities", "BgvFbSuzl5l1ahyzCadr");
    const snap = await getDoc(ref);

    console.log(snap.data());
  };

  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={writeSubData}>Put SubData</button>
      <button onClick={getDocument}>Get Document</button>


    </div>
  );
}

export default App;
