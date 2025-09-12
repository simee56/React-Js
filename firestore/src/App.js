import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
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

  //TO READ A DOCUMENT IF YOU KNOW THE ID
  const getDocument = async () => {
    const ref = doc(fireStore, "Cities", "BgvFbSuzl5l1ahyzCadr");
    const snap = await getDoc(ref);

    console.log(snap.data());
  };

  //TO GET A DOCUMENT - QUERY  
  const getDocumnetByQuery = async () => {
    const documentRef = collection(fireStore, "users");
    const q = query(documentRef, where("IsFemale", "==", "true"));
    const snapShot = await getDocs(q);
    snapShot.forEach((data) => console.log(data.data()));
  };

  //TO UPDATE DOCUMENT
  const update = async () => {
    const docRef = doc(fireStore, "Cities", "BgvFbSuzl5l1ahyzCadr");
    await updateDoc(docRef, {
      name: "New Delhi"
    });
  }

  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={writeSubData}>Put SubData</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumnetByQuery}>Get Documents By Query</button>
      <button onClick={update}>Update Doc</button>

    </div>
  );
}

export default App;
