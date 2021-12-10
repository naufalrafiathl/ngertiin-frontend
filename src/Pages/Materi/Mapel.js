import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router'
import { Link } from 'react-router-dom';
import { related_modul } from '../../redux/modules/materi/thunks'
import MateriComp from '../../Components/Materi/MateriComp'
import Kuis from '../../Pages/kuis/Kuis'
import Aturan from '../../Pages/kuis/Aturan'
import { get_materi } from '../../redux/modules/materi/thunks'


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
                    <h2 className="materi-title">{modul.mapel_data.name} 
                    { modul.mapel_data.name ? 
                    <Link to={`/materi/${modul.mapel_data.name.split(" ").join("-").toLowerCase()}/forum/`}>
                    <a><button>Forum</button></a>
                    </Link>:<></>
                    }</h2>
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
                                    <>
                                        <Link 
                                            to={`${modul_data.modul.split(" ").join("-").toLowerCase()}/${materi_data.judul.split(" ").join("-").toLowerCase()}/`} 
                                            key={key}
                                        >
                                            <li>{materi_data.judul}</li>
                                        </Link>
                                        <Link 
                                            to={`${modul_data.modul.split(" ").join("-").toLowerCase()}/${materi_data.judul.split(" ").join("-").toLowerCase()}/aturan/`} 
                                            key={key}
                                        >
                                            <li>{`Kuis ${materi_data.judul}`}</li>
                                        </Link>
                                    </>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
                )}
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
                            <>
                                <Route 
                                path={`${materi_data.judul.split(" ").join("-").toLowerCase()}/*`}
                                element={<MateriComp materi_data={materi_data} key={key1}/>} key={key1}
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
            <div className="container-materi">
                <Outlet></Outlet>
            </div>
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
