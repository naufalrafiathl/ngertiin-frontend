import React from 'react'
import { useState, useEffect } from 'react';
import PopUp from './PopUp';
import Soal from './Soal';
import './Kuis.css'
import CreateSoal from './CreateSoal';

function ListSoal() {
    const [kuis,setKuis]=useState([]);
    useEffect(() => {
        fetch('soal.json').then(response => {
            return response.json();
          }).then(data => {
            setKuis(data)
          }).catch(err => {
          });
    }, [] );
      
    return (
        <div >
            
            {/* buat soal */}
            <div className="container-quiz-card">
                <div className="kuis-card" style={{height: "1000px"}}>
                    <div className="title-card">
                        <h1>Bank Soal</h1>
                    </div>
                    <CreateSoal/>
                    <div className="button-card">
                        <div className="kembali">
                            <a href="/aturan"><button style={{background: "gray"}}>Kembali</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ListSoal
