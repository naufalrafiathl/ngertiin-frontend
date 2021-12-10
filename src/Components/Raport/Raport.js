import React from 'react'
import { useState,useEffect } from 'react';

import './raport.css'
function Raport() {
    const [nilai,setNilai]=useState([]);

    useEffect(() => {
        fetch('nilai.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            console.log(data)
            setNilai(data)
          }).catch(err => {
            // Do something for an error here
          });
      }, [] );

    return (
        <div >
            <div className="raport">
                <h1>RAPORT SISWA</h1>
                <hr/>
                <h4>KUIS</h4>
                {nilai ? nilai.map((users,index) => ( 
            <div className="raport-card">
                
                    <p >{users.mapel}</p>
                    <p>{users.nilai}</p>

            </div>
        )):"" }<hr/>
            </div>
            

        </div>
        

    )
}

export default Raport
