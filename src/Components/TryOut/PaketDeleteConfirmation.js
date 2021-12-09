import React from 'react'
import { Link } from 'react-router-dom';

function PaketDeleteConfirmation(props) {
    return (
        <div className="post-form-container">
            <h1>Konfirmasi Penghapusan Paket Soal Try Out</h1>
            <div className="form-section">
                <p>Apakah anda yakin akan menghapus paket try out ini?</p>
                <form>
                    <Link to="/delete-tryOut"><button>Hapus Paket</button></Link>
                    <Link to="/tryOut"><button className="cancel-btn" type="button">Batal</button></Link>
                </form>
            </div>
        </div>
    )
}

export default PaketDeleteConfirmation