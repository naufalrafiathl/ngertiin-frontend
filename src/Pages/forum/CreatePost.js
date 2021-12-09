import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PostForm from '../../Components/Forum/PostForm'

function CreatePost() {
    return (
        <div>
            <div>
            <div className="container-forum">
                <PostForm isReply={false} isUpdate={false}></PostForm>
            </div>
            </div>
        </div>
    )
}

export default CreatePost
