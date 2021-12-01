import React from 'react'
import './Kuis.css'

const Soal = ({kuis}) => {

    return (
        
        <div>
            <div className="question-card" style={{border: '1px solid #E8E8E8'}}>
                <div className="soal-card">
                    <h3>Question {kuis.id}</h3>
                    <hr/>
                    <p>{kuis.pertanyaan}</p>
                    <div> 
                        <input 
                            type="radio"
                            value = {kuis.jawaban.A}
                            name={kuis.jawaban.A}
                        />
                        {kuis.jawaban.A}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {kuis.jawaban.B}
                            name={kuis.jawaban.B}
                        />
                        {kuis.jawaban.B}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {kuis.jawaban.C}
                            name={kuis.jawaban.C}
                        />
                        {kuis.jawaban.C}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {kuis.jawaban.D}
                            name={kuis.jawaban.D}
                        />
                        {kuis.jawaban.D}
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Soal
