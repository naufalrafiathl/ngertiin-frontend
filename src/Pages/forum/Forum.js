import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ForumComp from '../../Components/Forum/ForumComp'

function Forum() {
    return (
        <div>
            <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-forum">
                <ForumComp mapel={''}/>
            </div>
            </div>
        </div>
    )
}

export default Forum
