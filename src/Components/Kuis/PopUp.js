import React from 'react'
import { useState, useEffect } from 'react';
import './Kuis.css'

const PopUp = () => {
    const [popup, setPopup] = useState(false);
    const toggleModal = () => {
        setPopup(!popup)
    }
    if(popup){
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
    return (
        <div>
            <div className="button-card">
                <button 
                onClick={toggleModal}>
                Selesai
                </button>
            </div>
            {popup && (
            <div className="popup">
                <div 
                className="overlay">
                    <div className="popup-content">
                        <h2>Apakah anda Yakin?</h2>
                        <p>
                        Dengan menekan tombol Ya, anda akan menyelesaikan kuis ini.
                        </p>
                        <div className="button-card">
                            <div className="kembali"> 
                                <button 
                                onClick={toggleModal}
                                style={{background: "gray"}}>
                                Tidak
                                </button>
                            </div>
                            <a href="/sukses"><button>Ya</button></a>
                        </div>
                    </div>
                </div>
            </div> 
            )}

        </div>
    )
}

export default PopUp
