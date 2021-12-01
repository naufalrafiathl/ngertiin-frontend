import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import '../css/TryOut.css'

function AturanTryOut() {
    return (
        <div >
            <Navbar isLogin={false} isRegistered={true}></Navbar>
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
                        Jumlah pertanyaan: 5
                    </div>
                    <div className="content-card">
                        <a href="/mengerjakan-tryOut"><button>Mengerjakan Try Out</button></a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AturanTryOut