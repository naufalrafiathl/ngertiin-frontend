
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Materi from './Pages/Materi';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';

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
            <Route path="/profile" element={<Profile/>}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
