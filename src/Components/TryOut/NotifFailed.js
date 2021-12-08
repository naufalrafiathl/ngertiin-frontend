import React from 'react'

function NotifFailed(props) {
    function FailedType(props) {
        const { type } = props
        switch(type) {
            case "create":
                return 'Gagal membuat paket soal try out.';
            case "update":
                return 'Gagal mengubah soal try out.';
            case "delete":
                return 'Gagal menghapus paket try out.';
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

export default NotifFailed