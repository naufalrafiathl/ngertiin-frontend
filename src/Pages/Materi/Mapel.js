import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router'
import { Link } from 'react-router-dom';
import { related_modul } from '../../redux/modules/materi/thunks'

import MapelComp from '../../Components/Materi/MapelComp'
import MateriComp from '../../Components/Materi/MateriComp'
import Kuis from '../../Pages/kuis/Kuis'
import Aturan from '../../Pages/kuis/Aturan'


const Mapel = ({mapel_data}) => {
    const dispatch = useDispatch()
    const { modul } = useSelector((state) => state.materi)

    useEffect(() => {
        dispatch(related_modul({
            mapel: mapel_data.id
        }))
    }, [dispatch, mapel_data])

    return (
        <div>
            <div className="container-mapel">
                {modul && (
                <>
                    <h2 className="materi-title">{modul.mapel_data.name}</h2>
                    <div className="modul-container">
                    {modul.related_modul.map((modul_data, key) => (
                        <div className="modul" key={key}>
                            <h3>{modul_data.modul}</h3>
                            {modul_data &&
                             modul_data.related_materi.map((materi, key) => (
                                <li key={key}>
                                    {materi.judul}
                                    <div className="button-card">
                                        <Link to={{pathname:`/materi/${modul.mapel_data.name.split(" ").join("-").toLowerCase()}/${modul_data.modul.split(" ").join("-").toLowerCase()}/${materi.judul.split(" ").join("-").toLowerCase()}/aturan`}}>
                                            <div className="kembali">
                                            <a><button>Mengerjakan Kuis</button></a>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="button-card">
                                        <a href="/buat"><button style={{background: "gray"}}>Buat Soal</button></a>
                                    </div>
                                </li>
                             ))}
                        </div>
                        
                    ))}
                    </div>
                </>
                )}
            </div>
        <Routes>
            <Route path="" element={<MapelComp/>}/>
            {modul && modul.related_modul.map((modul_data, key) => (
                    <Route 
                      path={modul_data.modul.split(" ").join("-").toLowerCase()} 
                      key={key}
                    >
                        {modul_data.related_materi.map((materi_data, key1) => (
                            <>
                                <Route 
                                path={materi_data.judul.split(" ").join("-").toLowerCase()}
                                element={<MateriComp/>} key={key1}
                                />
                                <Route 
                                path={`${materi_data.judul.split(" ").join("-").toLowerCase()}/aturan/`}
                                element={<Aturan 
                                    mapel={modul.mapel_data.name.toLowerCase().split(" ").join("-").toLowerCase()} 
                                    modul={modul_data.modul.toLowerCase().split(" ").join("-").toLowerCase()} 
                                    soal={materi_data.judul.split(" ").join("-").toLowerCase()}/>} 
                                    key={key1}
                                />
                                <Route 
                                path={`${materi_data.judul.split(" ").join("-").toLowerCase()}/kuis/`}
                                element={<Kuis soal={materi_data.id}/>} key={key1}
                                />
                            </>
                        )
                    )}
                    </Route>
                )
            )}
        </Routes>
        <Outlet></Outlet>
        </div>
    )
}

export default Mapel
