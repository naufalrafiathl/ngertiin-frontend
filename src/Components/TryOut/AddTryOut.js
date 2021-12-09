import React from 'react'
import './AddTryOut.css'
import { Link } from 'react-router-dom';

function AddTryOut(props) {
    return (
        <div className="post-form-container">

            {props.isUpdate ? 
                <h1>Update Soal Try Out</h1>: 
                <h1>Create Soal Try Out</h1>
            }

            <div className="form-section">
                <form>
                    <div className="form-group">
                        <label for="nama" className="col-form-label">Nama Try Out</label>
                        <input type="text" id="nama" className="form-text-field" required></input>
                    </div>
                    <div className="form-group">
                        <label for="isi" className="col-form-label">Upload CSV menggunakan format penamaan 3</label>
                        <input type="file" accept=".csv" id="isi" className="form-csv-field" required></input>
                    </div>
                    <div className="form-group">
                        <label for="waktu" className="col-form-label">Waktu Pengerjaan</label>
                        <input type="integer"  id="waktu" className="form-text-field" required></input>
                    </div>
                    <a href="/listSoalTryOut"><button>Tambah Soal</button></a>
                    &nbsp; &nbsp;
                <Link to="/tryOut"><button className="cancel-button" type="button">Batal</button></Link>
                </form>
            </div>
        </div>
    )
}

export default AddTryOut