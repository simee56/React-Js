import './App.css';

////COMPONENTS
import MyNavbar from './components/navbar';

//PAGES 
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ListingPage from './pages/list';


//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}></Route>
        <Route path="/registration" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/book/list" element={<ListingPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
