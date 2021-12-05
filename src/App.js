
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
import Forum from './Pages/forum/Forum';
import CreatePost from './Pages/forum/CreatePost';
import UpdatePost from './Pages/forum/UpdatePost';
import DetailsPost from './Pages/forum/DetailsPost';
import DeletePost from './Pages/forum/DeletePost';
import CreateTryOut from './Pages/TryOut/CreateTryOut';
import UpdateTryOut from './Pages/TryOut/UpdateTryOut';
import AturanTryOut from './Pages/TryOut/AturanTryOut';
import SuksesSubmitTryOut from './Pages/TryOut/SuksesSubmitTryOut';
import MengerjakanTryOut from './Pages/TryOut/MengerjakanTryOut';
import DeletePaket from './Pages/TryOut/DeletePaket';
import TryOut from './Pages/TryOut/TryOut';

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
            <Route path="/forum" element={<Forum/>}/>
            <Route path="/create-post" element={<CreatePost/>}/>
            <Route path="/update-post" element={<UpdatePost/>}/>
            <Route path="/details-post" element={<DetailsPost/>}/>
            <Route path="/delete-post" element={<DeletePost/>}/>
            <Route path="/tryOut" element={<TryOut/>}/>
            <Route path="/create-tryOut" element={<CreateTryOut/>}/>
            <Route path="/update-tryOut" element={<UpdateTryOut/>}/>
            <Route path="/delete-tryOut" element={<DeletePaket/>}/>
            <Route path="/aturan-tryOut" element={<AturanTryOut/>}/>
            <Route path="/sukses-submit-tryOut" element={<SuksesSubmitTryOut/>}/>
            <Route path="/mengerjakan-tryOut" element={<MengerjakanTryOut/>}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
