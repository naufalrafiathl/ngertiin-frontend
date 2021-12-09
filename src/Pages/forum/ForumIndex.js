import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { related_mapel } from '../../redux/modules/materi/thunks';
import { Routes, Route, Outlet } from 'react-router';

import Forum from "../forum/Forum"
import CreatePost from '../forum/CreatePost';

const ForumIndex = ({mapel_data}) => {
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
            <Route path="" element={<Forum mapel_data={mapel_data}/>}></Route>
            {mapel &&  
              mapel.related_mapel.map((mapel_data, key) => {
                return(
                  <>
                    <Route
                      path={`/create-post/*`}
                      key={key}
                      element={<CreatePost mapel_data={mapel_data}/>}
                    />
                  </> 
                )}
            )}
        </Routes>
        <Outlet></Outlet>
      </>
    )
}

export default ForumIndex

