import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './css/Login.css'


function Login() {
    return (
        <div>
            <Navbar isLogin={false} ></Navbar>
            <div className="container-login">

            </div>
            <div className="form-login">
                <h1>Login</h1>
                <form>
                    <label>Username</label><br/>
                    <input type="text" /><br/>
                    <label>Password</label><br/>
                    <input type="password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
