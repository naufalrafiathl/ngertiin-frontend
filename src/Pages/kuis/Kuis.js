import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ListSoal from '../../Components/Kuis/ListSoal';

function Kuis1() {

    return (
        <div >
            <Navbar isLogin={false} isRegistered={true}></Navbar>
            <ListSoal/>
        </div>
    )
}


export default Kuis1
