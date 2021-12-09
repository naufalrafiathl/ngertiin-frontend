import React from 'react'
import './Dashboard.css'
import Popup from '../popup/Popup'

function Dashboard() {
    return (
        <div className="container-user">
        <div className="card-container">
 
            <div className="dashboard-card">

                    <h1>Dashboard</h1>
                    <hr />
                    <div className="kerjakan">
                        <h3>Kerjakan Tryout!</h3>
                    </div>
                    <div className="kerjakan">
                        <h3>Kerjakan Kuis!</h3>
                    </div>

                    <Popup/>
            </div>

        </div>
        
    </div>
    )
}

export default Dashboard
