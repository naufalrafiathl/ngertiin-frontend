import React from 'react'
import { useState,useEffect } from 'react';
import '../css/TryOut.css'
import { Link } from 'react-router-dom';

function AturanTryOut() {
    const queryString = window.location.pathname;

    var metaid = queryString.replace("/aturan-tryOut/", "");
    console.log(metaid)

    const [tryout,setTryOut]=useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/to/tryout/" + metaid).then(response => {
            return response.json();
          }).then(data => {
            setTryOut(data)
          }).catch(err => {
          });
    }, [] );

    return (
        <div >
            <div className="container-card">
                <div className="aturan-card">
                    <div className="title-card">
                        <h1>Aturan Try Out</h1>
                    </div>
                    <div className="content-card">
                        <p>Sesuai dengan terms of use di ngertiIn, submission try out ngertiIn haruslah hasil kerja Anda sendiri.</p>
                        <p>Kami memiliki hak mutlak untuk mengenakan sanksi kepada peserta yang melanggar ketentuan di atas. Sanksi tersebut berupa penangguhan akun ngertiIn. Artinya Anda tidak dapat melakukan pengerjaan soal apapun di kelas ngertiIn selama masa penangguhan. Nilai try out peserta kelas ngertiIn pun, otomatis kami reset ke 0 (nol), tanpa terkecuali.</p>
                    </div>
                    <div className="content-card">
                        <Link to={"/mengerjakan-tryOut/" + metaid}><button>Mengerjakan Try Out</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AturanTryOut