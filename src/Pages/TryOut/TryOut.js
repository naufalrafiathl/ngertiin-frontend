import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TryOutC from '../../Components/TryOut/TryOutC'

function TryOut() {
    return (
        <div>
            <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-forum">
                <TryOutC/>
            </div>
            </div>
        </div>
    )
}

export default TryOut