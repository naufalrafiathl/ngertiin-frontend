import React from 'react'
import PostForm from '../../Components/Forum/PostForm'

function CreatePost(props) {
    return (
        <div>
            <div>
            <div className="container-forum">
                <PostForm mapel_data={props.mapel_data} isReply={false} isUpdate={false}></PostForm>
            </div>
            </div>
        </div>
    )
}

export default CreatePost
