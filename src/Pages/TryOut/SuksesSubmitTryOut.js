import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Icon } from '@iconify/react';
function SuksesSubmitTryOut() {
    return (
        <div>
            <Navbar isLogin={false} isRegistered={true}></Navbar>
            <div className="container-card">
                <div className="aturan-card">
                    <div className="sukses-card">
                        <h1>Jawaban Try Out</h1>
                        <Icon icon="bi:check-circle-fill" color="#FC997C" height="150" />
                        <h1>Sudah Terkirim</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuksesSubmitTryOut