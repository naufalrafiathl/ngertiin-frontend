import React from 'react'
import './TryOut.css'

const SoalTryOut = ({tryout}) => {

    return (
        
        <div>
            <div className="question-card" style={{border: '1px solid #E8E8E8'}}>
                <div className="soal-card">
                    <h3>Question {tryout.id}</h3>
                    <hr/>
                    <p>{tryout.pertanyaan}</p>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.jawaban.A}
                            name={tryout.jawaban.A}
                        />
                        {tryout.jawaban.A}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.jawaban.B}
                            name={tryout.jawaban.B}
                        />
                        {tryout.jawaban.B}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.jawaban.C}
                            name={tryout.jawaban.C}
                        />
                        {tryout.jawaban.C}
                    </div>
                    <div> 
                        <input 
                            type="radio"
                            value = {tryout.jawaban.D}
                            name={tryout.jawaban.D}
                        />
                        {tryout.jawaban.D}
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default SoalTryOut