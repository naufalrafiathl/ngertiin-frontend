import React from 'react'
import './Notification.css'

function SuccessNotification(props) {

    function SuccessType(props) {
        const { type } = props
        switch(type) {
            case "create":
                return 'Sukses membuat post.';
            case "update":
                return 'Sukses mengubah post.';
            case "delete":
                return 'Sukses menghapus post.';
            default:
                return 'XX';
        }
    }

    return (
        <div className='notification success-notification'>
            <p><SuccessType type={props.type}/></p>
        </div>
    )
}

export default SuccessNotification
