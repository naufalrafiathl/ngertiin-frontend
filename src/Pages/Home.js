import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Typewriter from 'typewriter-effect';
import './css/Home.css'

function Home() {
    return (
        <div className="container-home">
            <Navbar isLogin={false} isRegistered={true}></Navbar>
            <div className="container-login">
            </div>
            <div className="container-home">
            <div className="running">
                        <Typewriter
                        options={{
                            strings: ['ngertiIn', 'Next level learning system.'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
            </div>
            </div>

            <div className="container-learn-home">
                <div className="options-home">
                    <div class="vertical-center">
                    <a href="/register"><button className="getStarted">Daftar Sekarang</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
