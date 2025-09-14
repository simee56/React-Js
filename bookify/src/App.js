import './App.css';

//PAGES 
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";


//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home page</h1>}></Route>
      <Route path="/registration" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>

    </Routes>
  );
}

export default App;
