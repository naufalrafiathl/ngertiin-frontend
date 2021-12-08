import React from 'react'
import { useState,useEffect } from 'react';

import './ProfileCard.css'
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
        <h1>Profile</h1>
        <div className="card-container">
        {user ? user.map((users,index) => ( 
            <div className="user-card">
                    <p>Nama : {users.fullName}</p>
                    <p>Modul : {users.role}</p>
                    <p>Jurusan Impian : {users.jurusanImpian}</p>
                    <p>Motto Hidup : {users.mottoHidup}</p>

                    <button>Cek Raport</button>
            </div>
        )):"" }
        </div>
        
    </div>
    )
}

export default ProfileCard