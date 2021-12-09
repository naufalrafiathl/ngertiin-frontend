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
                            value = {kuis.A}
                            name={kuis.A}
                        />
                        {kuis.A}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {kuis.B}
                            name={kuis.B}
                        />
                        {kuis.B}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {kuis.C}
                            name={kuis.C}
                        />
                        {kuis.C}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {kuis.D}
                            name={kuis.D}
                        />
                        {kuis.D}
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Soal
