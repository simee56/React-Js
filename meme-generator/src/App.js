import {Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from './pages/home';
import EditPage from './pages/edit';

function App() {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/edit" element={<EditPage/>} />
      </Routes>
    </div>
  );
}

export default App;
