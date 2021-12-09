import React from 'react'
import './Navbar.css'
import { useState } from "react";
import { AiOutlineMenuUnfold,AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/modules/auth/thunks'
import { Link } from 'react-router-dom';

function Navbar(props) {

    const dispatch = useDispatch()
    const [click,setClick] = useState(false)
    const btnClick = () => setClick(!click)

    return (
        <div className="navbars">
            <div className="navbar-container ctrNav">
                <a className="direct-detail" href="/"><h4 className="ngertiin"><span className="style1">ngerti</span>In</h4></a>
                
                {props.isLogin ? 
                <div className="topnav" id="myTopnav">
                    <Link to='/materi'>Materi</Link>
                    <a href="profile">Profile</a>
                    <Link to ="/tryOut" >Try Out</Link>
                    <a href="/" className="logout" onClick={() => dispatch(logout())}>Log-out</a>
                </div>
                : props.isRegistered? 
            <div className="login-home">
                <a href="/login"><button>Login</button></a>
            </div>: <div className="login-home">
                <a href="/register"><button>Register</button></a>
            </div>
            }
                
                <div className="menu-icon" onClick={btnClick} >
                    {click ? <AiOutlineMenuUnfold/> : <AiOutlineMenu/>}
                </div>
                {props.isLogin ? 
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <a className="direct-detail" href="/">
                    <li className="nav-item">
                            Home
                    </li>
                </a>
                <Link className='direct-detail' to='/materi' >
                    <li className="nav-item">
                            Materi
                    </li>
                </Link>
                <a className="direct-detail" href="/profile">
                    <li className="nav-item">
                            Profile
                    </li>
                </a>
                <a href="/" className="direct-detail"  onClick={() => dispatch(logout())}>
                    <li className="nav-item">
                            Log-out
                    </li>
                </a>
                <Link className="direct-detail" to="/tryOut">
                    <li className="nav-item">
                            Try Out
                    </li>
                </Link>
            </ul>:""
                }
                
            </div>
        </div>
    )
}

export default Navbar
