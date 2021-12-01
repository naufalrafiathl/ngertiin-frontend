import React from 'react'
import { useState, useEffect } from 'react';
import PopUpTryOut from './PopUpTryOut';
import SoalTryOut from './SoalTryOut';
import './TryOut.css'

function ListSoalTryOut() {
    const [tryout,setTryOut]=useState([]);
    useEffect(() => {
        fetch('soal.json').then(response => {
            return response.json();
          }).then(data => {
            setTryOut(data)
          }).catch(err => {
          });
    }, [] );
      
    return (
        <div >
            <div className="container-quiz-card">
                <div className="kuis-card">
                    <div className="title-card">
                        <h1>Try Out 1</h1>
                        <h3>Timer</h3>
                    </div>
                    {tryout.map((tryout, index) => (
                        <SoalTryOut key = {index} tryout = {tryout}/>
                    ))}
                    <div className="button-card">
                        <div className="kembali">
                            <a href="/aturan-tryOut"><button style={{background: "gray"}}>Kembali</button></a>
                        </div>
                        <PopUpTryOut/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListSoalTryOut