
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Materi from './Pages/Materi';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import CreateTryOut from './Pages/TryOut/CreateTryOut';
import UpdateTryOut from './Pages/TryOut/UpdateTryOut';
import AturanTryOut from './Pages/TryOut/AturanTryOut';
import SuksesSubmitTryOut from './Pages/TryOut/SuksesSubmitTryOut';
import MengerjakanTryOut from './Pages/TryOut/MengerjakanTryOut';

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
            <Route path="/create-tryOut" element={<CreateTryOut/>}/>
            <Route path="/update-tryOut" element={<UpdateTryOut/>}/>
            <Route path="/aturan-tryOut" element={<AturanTryOut/>}/>
            <Route path="/sukses-submit-tryOut" element={<SuksesSubmitTryOut/>}/>
            <Route path="/mengerjakan-tryOut" element={<MengerjakanTryOut/>}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
