import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ListSoalTryOut from '../../Components/TryOut/ListSoalTryOut';
import { useState,useEffect } from 'react';

function MengerjakanTryOut() {
    const queryString = window.location.pathname;

    var metaid = queryString.replace("/mengerjakan-tryOut/", "");
    console.log(metaid)

    return (
        <div >
            <Navbar isLogin={false} isRegistered={true}></Navbar>
            <ListSoalTryOut id={metaid}/>
        </div>
    )
}


export default MengerjakanTryOut