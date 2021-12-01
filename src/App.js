
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Materi from './Pages/Materi';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import Kuis from './Pages/kuis/Kuis';
import Aturan from './Pages/kuis/Aturan';
import Sukses from './Pages/kuis/Sukses';

function App() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/materi" element={<Materi/>}/>
            <Route path="/aturan" element={<Aturan/>}/>
            <Route path="/kuis" element={<Kuis/>}/>
            <Route path="/sukses" element={<Sukses/>}/>
            <Route path="/profile" element={<Profile/>}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
