import React from 'react'
import PostForm from '../../Components/Forum/PostForm'

function UpdatePost() {
    return (
        <div>
            <div>
            <div className="container-forum">
                <PostForm isReply={false} isUpdate={true}></PostForm>
            </div>
            </div>
        </div>
    )
}

export default UpdatePost
