import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ConfirmationDeletePost from '../../Components/Forum/ConfirmationDeletePost'

function DeletePost() {
    return (
        <div>
            <div>
            <div className="container-forum">
                <ConfirmationDeletePost></ConfirmationDeletePost>
            </div>
            </div>
        </div>
    )
}

export default DeletePost
