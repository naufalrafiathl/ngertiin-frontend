import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import '../css/Kuis.css'
import { Link } from 'react-router-dom';

function Aturan(mapel, modul, soal) {

    return (
        <div >
            <div className="container-card">
                <div className="aturan-card">
                    <div className="title-card">
                        <h1>Aturan</h1>
                    </div>
                    <div className="content-card">
                        <p>Sesuai dengan terms of use di ngertiIn, submission kelas ngertiIn haruslah hasil kerja Anda sendiri.</p>
                        <p>Materi yang didapatkan dari sumber lain (website, buku, forum, dan lain-lain) hanya digunakan sebagai referensi. Tidak boleh menggunakan forum diskusi untuk bekerja sama dalam mengerjakan kuis.</p>
                        <p>Kami memiliki hak mutlak untuk mengenakan sanksi kepada peserta yang melanggar ketentuan di atas. Sanksi tersebut berupa penangguhan akun ngertiIn. Artinya Anda tidak dapat melakukan pengerjaan soal apapun di kelas ngertiIn selama masa penangguhan. Progress belajar peserta kelas ngertiIn pun, otomatis kami reset ke 0 (nol), tanpa terkecuali.</p>
                    </div>
                    <div className="content-card">
                            <Link to={{pathname:`/materi/${mapel.mapel}/${mapel.modul}/${mapel.soal}/kuis`}}>
                                <div className="kembali">
                                </div>
                                <a><button>
                                Mengerjakan Kuis
                                </button></a>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Aturan
