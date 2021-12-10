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
                    <a href="/tryOut">
                    <div className="kerjakan">
                    <h3>Kerjakan Tryout!</h3>
                    </div>
                    </a> 
                    <a href="/tryOut">
                    <div className="kerjakan">
                        <h3>Kerjakan Kuis!</h3>
                    </div>
                    </a>

                    <Popup/>
            </div>

        </div>
        
    </div>
    )
}

export default Dashboard
