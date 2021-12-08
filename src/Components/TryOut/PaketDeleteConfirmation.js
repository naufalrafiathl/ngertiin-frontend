import React from 'react'

function PaketDeleteConfirmation(props) {
    return (
        <div className="post-form-container">
            <h1>Konfirmasi Penghapusan Paket Soal Try Out</h1>
            <div className="form-section">
                <p>Apakah anda yakin akan menghapus paket try out ini?</p>
                <form>
                    <a href="/delete-tryOut"><button>Hapus Paket</button></a>
                    <a href="/tryOut"><button className="cancel-btn" type="button">Batal</button></a>
                </form>
            </div>
        </div>
    )
}

export default PaketDeleteConfirmation