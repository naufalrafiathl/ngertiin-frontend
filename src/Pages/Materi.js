import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MateriComp from '../Components/Materi/MateriComp'
function Materi() {


    return (
        <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-materi">
                <MateriComp isSaintek={true}/>
            </div>
        </div>
    )
}

export default Materi
