import React from 'react'
import './Navbar.css'
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold,AiOutlineMenu } from 'react-icons/ai'

function Navbar(props) {


    const [click,setClick] = useState(false)
    const btnClick = () => setClick(!click)
    const closeMobileMenu= () => setClick(false);
    console.log(props.isLogin)

    return (
        <div className="navbars">
            <div className="navbar-container ctrNav">
                <a className="direct-detail" href="/"><h4 className="ngertiin"><span className="style1">ngerti</span>In</h4></a>
                
                {props.isLogin ? 
                <div class="topnav" id="myTopnav">
                <a href="materi" >Materi</a>
                <a href="profile">Profile</a>
            </div>: props.isRegistered? 
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
                <a className="direct-detail" href="/Materi">
                    <li className="nav-item">
                            Materi
                    </li>
                </a>
                <a className="direct-detail" href="/profile">
                    <li className="nav-item">
                            Profile
                    </li>
                </a>
                <a className="direct-detail" href="/tryOut">
                    <li className="nav-item">
                            Try Out
                    </li>
                </a>
            </ul>:""
                }
                
            </div>
        </div>
    )
}

export default Navbar
