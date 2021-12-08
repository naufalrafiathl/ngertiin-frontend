import React from 'react'
import Dashboard from '../Components/DashboardProfile/Dashboard'
import Navbar from '../Components/Navbar/Navbar'
import Popup from '../Components/popup/Popup'
import ProfileCard from '../Components/ProfileCard/ProfileCard'
function Profile() {
    return (
        <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <div className="header-profile">
                <div className="header-left">
                <ProfileCard/>
                </div>
                <div className="header-right">
                <Dashboard></Dashboard>
                <Popup/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Profile
