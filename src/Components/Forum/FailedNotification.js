import React from 'react'

function FailedNotification(props) {
    function FailedType(props) {
        const { type } = props
        switch(type) {
            case "create":
                return 'Gagal membuat post.';
            case "update":
                return 'Gagal mengubah post.';
            case "delete":
                return 'Gagal menghapus post.';
            default:
                return 'XX';
        }
    }

    return (
        <div className='notification error-notification'>
            <p><FailedType type={props.type}/></p>
        </div>
    )
}

export default FailedNotification
