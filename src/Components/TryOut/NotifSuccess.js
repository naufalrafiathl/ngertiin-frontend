import React from 'react'
import './FailedSuccess.css'

function NotifSuccess(props) {

    function SuccessType(props) {
        const { type } = props
        switch(type) {
            case "create":
                return 'Sukses memasukkan Soal Try Out baru.';
            case "update":
                return 'Sukses mengubah soal Try Out.';
            case "delete":
                return 'Sukses menghapus paket soal Try Out.';
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

export default NotifSuccess