import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ListSoalTryOut from '../../Components/TryOut/ListSoalTryOut';

function MengerjakanTryOut() {

    return (
        <div >
            <Navbar isLogin={false} isRegistered={true}></Navbar>
            <ListSoalTryOut/>
        </div>
    )
}


export default MengerjakanTryOut