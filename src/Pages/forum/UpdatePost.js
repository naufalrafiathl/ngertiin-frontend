import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PostForm from '../../Components/Forum/PostForm'

function UpdatePost() {
    return (
        <div>
            <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="container-forum">
                <PostForm isReply={false} isUpdate={true}></PostForm>
            </div>
            </div>
        </div>
    )
}

export default UpdatePost
