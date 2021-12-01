import React from 'react'

function ConfirmationDeletePost(props) {
    return (
        <div className="post-form-container">
            <h1>Konfirmasi Penghapusan Post</h1>
            <div className="form-section">
                <p>Apakah anda yakin untuk menghapus post?</p>
                <form>
                    <a href="/delete-post"><button>Hapus Post</button></a>
                    <a href="/forum"><button className="cancel-btn" type="button">Batal</button></a>
                </form>
            </div>
        </div>
    )
}

export default ConfirmationDeletePost
