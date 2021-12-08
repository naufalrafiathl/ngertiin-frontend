import React from 'react'
import './TryOut.css'

const SoalTryOut = ({tryout}) => {

    return (
        
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
    )
}

export default SoalTryOut