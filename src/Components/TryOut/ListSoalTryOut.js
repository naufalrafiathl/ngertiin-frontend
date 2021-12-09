import React from 'react'
import { useState, useEffect } from 'react';
import PopUpTryOut from './PopUpTryOut';
import SoalTryOut from './SoalTryOut';
import './TryOut.css'

function ListSoalTryOut(props) {
    console.log(props.id)
    const [tryout,setTryOut]=useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/to/tryout/" + props.id).then(response => {
            return response.json();
          }).then(data => {
              console.log(data.soal)
            setTryOut(data.soal)
          }).catch(err => {
          });
    }, [] );
    console.log(tryout)
    
    return (
        <div >
            <div className="container-quiz-card">
                <div className="kuis-card">
                    <div className="title-card">
                        <h1>Try Out 1</h1>
                        <h3>Timer</h3>
                    </div>
                    {tryout.map((tryout, index) => (
                        <div>
            <div className="question-card" style={{border: '1px solid #E8E8E8'}}>
                <div className="soal-card">
                    <h3>Question {tryout.no}</h3>
                    <hr/>
                    <p>{tryout. pertanyaan}</p>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.A}
                            name={tryout.A}
                        />
                        {tryout. A}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.B}
                            name={tryout.A}
                        />
                        {tryout.B}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.C}
                            name={tryout.A}
                        />
                        {tryout.C}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.D}
                            name={tryout.A}
                        />
                        {tryout.D}
                    </div>
                </div>
            </div>  
        </div>
                    ))}
                        <PopUpTryOut/>
                    </div>
                </div>
            </div>
    )
}

export default ListSoalTryOut