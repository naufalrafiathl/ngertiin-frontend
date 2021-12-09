import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PaketDeleteConfirmation from '../../Components/TryOut/PaketDeleteConfirmation'

function DeletePaket() {
    return (
        <div>
            <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-forum">
                <PaketDeleteConfirmation></PaketDeleteConfirmation>
            </div>
            </div>
        </div>
    )
}

export default DeletePaket