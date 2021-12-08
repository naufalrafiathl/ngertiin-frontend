import React from 'react'
import { useState,useEffect } from 'react';

import './ProfileCard.css'
import profiles from '../../assets/image/profiles.png'

function ProfileCard() {

    const [user,setUser]=useState([]);

    useEffect(() => {
        fetch('User.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            setUser(data)
          }).catch(err => {
            // Do something for an error here
          });
      }, [] );


    return (
        <div className="container-user">
        <div className="card-container">
        {user ? user.map((users,index) => ( 
            <div className="user-card">
                    <img className="img-profile" src={profiles} alt="" />
                    <p className="nama-card">{users.fullName}</p>
                    <p>{users.role}</p>
                    <p className="isPremium">Premium Student</p>

            </div>
        )):"" }
        </div>
        
    </div>
    )
}

export default ProfileCard