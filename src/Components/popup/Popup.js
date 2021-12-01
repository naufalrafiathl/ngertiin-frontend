import React from 'react'
import { useState, useEffect } from 'react';

function Popup() {
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
                
                </button>
            </div>
            {popup && (
            <div className="popup">
                <div 
                className="overlay">
                    <div className="popup-content">
                        <h2>Generate raport?</h2>
                        <p>
                        Dengan menekan tombol Lihat, anda akan melihat raport.
                        </p>
                        <div className="button-card">
                            <div className="kembali"> 
                                <button 
                                onClick={toggleModal}
                                style={{background: "gray"}}>
                                Batal
                                </button>
                            </div>
                            <a href="/sukses"><button>Lihat</button></a>
                        </div>
                    </div>
                </div>
            </div> 
            )}

        </div>
    )
}

export default Popup
