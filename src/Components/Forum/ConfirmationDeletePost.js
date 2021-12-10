import React from 'react'
import { useDispatch} from 'react-redux';
import { delete_post } from '../../redux/modules/forum/thunks'
import { Link } from 'react-router-dom';

function ConfirmationDeletePost(props) {
    const dispatch = useDispatch()
    const queryString = window.location.pathname;
    var querylist = queryString.split("/")
    var id_post = querylist[6]
    var mapel = querylist[2]
    
    function del_post() {
        dispatch(delete_post({
            id: id_post,
            nama_mapel: mapel
            })
        )
    }

    return (
        <div className="post-form-container">
            <h1>Konfirmasi Penghapusan Post</h1>
            <div className="form-section">
                <p>Apakah anda yakin untuk menghapus post?</p>
                <form>
                    <a onClick={del_post}><button>Hapus Post</button></a>
                    <Link to={{pathname:`/materi/${mapel}/forum/`}}>
                        <a><button className="cancel-btn" type="button">Batal</button></a>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ConfirmationDeletePost
