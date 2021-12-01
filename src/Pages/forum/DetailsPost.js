import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PostComp from '../../Components/Forum/PostComp'

function DetailsPost() {
    return (
        <div>
            <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-forum">
                <PostComp></PostComp>
            </div>
            </div>
        </div>
    )
}

export default DetailsPost
