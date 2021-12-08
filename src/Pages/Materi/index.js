import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { related_mapel } from '../../redux/modules/materi/thunks';
import { Routes, Route, Outlet } from 'react-router';

import Mapel from "./Mapel"
import JurusanComp from "../../Components/Materi/JurusanComp"

const Style = styled.div`
    h2 {

    }
`

const Materi = () => {
    const dispatch = useDispatch()
    const { student } = useSelector((state) => state.auth)
    const { mapel } = useSelector((state) => state.materi)

    useEffect(() => {
      student &&
      dispatch(related_mapel({
          jurusan: student.jurusan_data.id,
        })
      )
    }, [dispatch, student])

    return (
      <>
        <Routes>
            <Route path="" element={<JurusanComp/>}></Route>
            {mapel &&  
              mapel.related_mapel.map((mapel_data, key) => {
                return(
                  <Route 
                    path={`/${mapel_data.mapel.split(" ").join("-").toLowerCase()}/*`}
                    key={key}
                    element={<Mapel mapel_data={mapel_data}/>}
                  />
                )}
            )}
        </Routes>
        <Outlet></Outlet>
      </>
    )
}

export default Materi

