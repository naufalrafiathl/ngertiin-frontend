import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Icon } from '@iconify/react';
function Sukses() {
    return (
        <div>
            <div className="container-card">
                <div className="aturan-card">
                    <div className="sukses-card">
                        <h1>Jawaban Kuis Metabolisme</h1>
                        <Icon icon="bi:check-circle-fill" color="#FC997C" height="150" />
                        <h1>Sudah Terkirim</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sukses
