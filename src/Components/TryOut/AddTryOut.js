import React from 'react'
import './AddTryOut.css'
import { useState,useEffect } from 'react';

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
                        <label for="deskripsi" className="col-form-label">Deskripsi</label>
                        <input type="text" id="deskripsi" className="form-text-field" required></input>
                    </div>
                    <div className="form-group">
                        <label for="isi" className="col-form-label">Upload CSV</label>
                        <input type="file" id="isi" className="form-csv-field" required></input>
                    </div>
                    <a href="/listSoalTryOut"><button>Tambah Soal</button></a>
                <a href="/tryOut"><button className="cancel-btn" type="button">Batal</button></a>
                </form>
            </div>
        </div>
    )
}

export default AddTryOut