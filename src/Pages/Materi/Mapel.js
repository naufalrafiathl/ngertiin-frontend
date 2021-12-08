import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router'

import { get_materi, related_modul } from '../../redux/modules/materi/thunks'

import MapelComp from '../../Components/Materi/MapelComp'
import MateriComp from '../../Components/Materi/MateriComp'
import { Link } from 'react-router-dom'

const Mapel = ({mapel_data}) => {
    const dispatch = useDispatch()
    const { modul } = useSelector((state) => state.jurusan)

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
                        <div className="modul"> 
                            <h3>Pendahuluan</h3>
                            <Link to="pendahuluan">
                                <li>Pendahuluan Materi</li>
                            </Link>
                        </div>
                        {modul.related_modul.map((modul_data, key) => (
                            <div className="modul" key={key}>
                                <h3>{modul_data.modul}</h3>
                                {modul_data &&
                                modul_data.related_materi.map((materi_data, key) => (
                                    <Link 
                                        to={`${modul_data.modul.split(" ").join("-").toLowerCase()}/${materi_data.judul.split(" ").join("-").toLowerCase()}/`} 
                                        key={key}
                                    >
                                        <li>{materi_data.judul}</li>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
                )}
            </div>
            <div className="container-materi">
                <Outlet></Outlet>
            </div>
            <Routes>
                <Route path="" element={<Mapel.Pendahuluan/>}/>
                <Route path="pendahuluan" element={<Mapel.Pendahuluan/>}/>
                {modul && modul.related_modul.map((modul_data, key) => (
                        <Route 
                        path={`${modul_data.modul.split(" ").join("-").toLowerCase()}/*`} 
                        key={key}
                        >
                            {modul_data.related_materi.map((materi_data, key1) => (
                                <Route 
                                path={`${materi_data.judul.split(" ").join("-").toLowerCase()}/*`}
                                element={<MateriComp materi_data={materi_data} key={key1}/>} key={key1}
                                />
                            )
                        )}
                        </Route>
                    )
                )}
            </Routes>
        </div>
    )
}

Mapel.Pendahuluan = () => (
    <div className="materi-container">
        <h2>Pendahuluan Materi</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
)

export default Mapel
