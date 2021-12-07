import React from 'react'
import Typewriter from 'typewriter-effect';
import './css/Home.css'

function Home() {
    return (
        <div >
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
                    <div className="vertical-center">
                    <a href="/register"><button className="getStarted">Daftar Sekarang</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
