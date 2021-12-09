import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AddTryOut from '../../Components/TryOut/AddTryOut'

function UpdateTryOut() {
    return (
        <div>
            <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-forum">
                <AddTryOut isUpdate={true}></AddTryOut>
            </div>
            </div>
        </div>
    )
}

export default UpdateTryOut