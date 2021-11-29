import React from 'react'
import './Materi.css'
import { useState,useEffect } from 'react';

function MateriComp(props) {
    
    const [mats,setMats]=useState([]);

    useEffect(() => {
        console.log("TES")
        fetch('Materi.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            setMats(data)
            console.log(data);
          }).catch(err => {
            // Do something for an error here
          });
      }, [] );

    return (
        <div className="container-materi">
            <h1>{props.isSaintek ? "Saintek":"Soshum"}</h1>
            <div className="card-container">
            {mats ? mats.map((mat,index) => ( 
                <div className="materi-card">
                        <h1>{mat.judulMateri}</h1>
                        <div className="descMateri">
                            <p>{mat.respons}</p>
                        </div>
                </div>
            )):"" }
            </div>
            
        </div>
    )
}

export default MateriComp
