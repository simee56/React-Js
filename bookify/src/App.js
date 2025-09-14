import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home page</h1>}></Route>
      <Route path="/" element={<h1>Login page</h1>}></Route>

    </Routes>
  );
}

export default App;
