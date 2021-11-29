import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
function Register() {
    return (
        <div>
        <Navbar isLogin={false} isRegistered={true}></Navbar>
        <div className="container-login">

        </div>
        <div className="form-login">
            <h1>Register</h1>
            <form>
                <label>Username</label><br/>
                <input type="text" /><br/>
                <label>Password</label><br/>
                <input type="password" />
                <button>Register</button>
            </form>
        </div>
    </div>
    )
}

export default Register
