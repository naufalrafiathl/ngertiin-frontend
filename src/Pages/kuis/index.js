import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { related_soal } from '../../redux/modules/materi/thunks';
import { Routes, Route, Outlet } from 'react-router';


const soalKuis = () => {

    
    // const dispatch = useDispatch()
    // const { materi_kuis } = useSelector((state) => state.materi)

    // useEffect(() => {
    //   // student &&
    //   dispatch(related_soal({
    //       materi_kuis: materi_kuis.soal,
    //     })
    //   )
    // }, [dispatch, materi_kuis])

    // return (
    //     <>
    //       <Routes>
    //           <Route path="" element={<JurusanComp/>}></Route>
    //           {mapel &&  
    //             mapel.related_mapel.map((mapel_data, key) => {
    //               return(
    //                 <Route 
    //                   path={`/${mapel_data.mapel.split(" ").join("-").toLowerCase()}/*`}
    //                   key={key}
    //                   element={<Mapel mapel_data={mapel_data}/>}
    //                 />
    //               )}
    //           )}
    //       </Routes>
    //       <Outlet></Outlet>
    //     </>
    //   )
  
}

export default soalKuis