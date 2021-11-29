import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ProfileCard from '../Components/ProfileCard/ProfileCard'
function Profile() {
    return (
        <div>
            <Navbar isLogin={true} isRegistered={true}></Navbar>
            <ProfileCard/>
        </div>
    )
}

export default Profile
