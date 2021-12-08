import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AddTryOut from '../../Components/TryOut/AddTryOut'

function CreateTryOut() {
    return (
        <div>
            <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-forum">
                <AddTryOut isUpdate={false}></AddTryOut>
            </div>
            </div>
        </div>
    )
}

export default CreateTryOut