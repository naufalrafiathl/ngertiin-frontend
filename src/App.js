
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Materi from './Pages/Materi';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import Forum from './Pages/forum/Forum';
import CreatePost from './Pages/forum/CreatePost';
import UpdatePost from './Pages/forum/UpdatePost';
import DetailsPost from './Pages/forum/DetailsPost';
import DeletePost from './Pages/forum/DeletePost';

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
            <Route path="/forum" element={<Forum/>}/>
            <Route path="/create-post" element={<CreatePost/>}/>
            <Route path="/update-post" element={<UpdatePost/>}/>
            <Route path="/details-post" element={<DetailsPost/>}/>
            <Route path="/delete-post" element={<DeletePost/>}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
