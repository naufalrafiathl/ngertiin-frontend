import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { related_soal } from '../../redux/modules/materi/thunks';
import { Routes, Route, Outlet } from 'react-router';
import { useEffect } from 'react';
import Soal from '../../Components/Kuis/Soal';
import PopUp from '../../Components/Kuis/PopUp';


const Kuis = ({soal}) => {
    const dispatch = useDispatch()
    const { materi_kuis } = useSelector((state) => state.materi)
    console.log(soal);
    console.log("halofromkuis")

    useEffect(() => {
        dispatch(related_soal({
            materi_kuis: soal
        }))
    }, [dispatch, soal])
    
    console.log(soal);

    return (
      <>    
            <div className="container-quiz-card">
                <div className="kuis-card">
                    <div className="title-card">
                        <h1>Kuis Metabolisme</h1>
                    </div>
                    {materi_kuis && materi_kuis.soal.map((soal, key) => (
                        <Soal key={key} kuis = {soal}/>
                    ))}
                    <div className="button-card">
                        <div className="kembali">
                            <a href="/aturan"><button style={{background: "gray"}}>Kembali</button></a>
                        </div>
                        <PopUp/>
                    </div>
                </div>
            </div>
        <div>

        </div>
      </>
    )
}

export default Kuis