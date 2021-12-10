import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { related_post } from '../../redux/modules/forum/thunks'
import { related_mapel } from '../../redux/modules/materi/thunks';
import { Routes, Route, Outlet } from 'react-router';

import Forum from "./Forum"
import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import DetailsPost from './DetailsPost'
import UpdatePost from './UpdatePost'

const ForumIndex = ({mapel_data}) => {
    const dispatch = useDispatch()
    const { student } = useSelector((state) => state.auth)
    const { mapel } = useSelector((state) => state.materi)
    const { posts } = useSelector((state) => state.forum)

    useEffect(() => {
      student &&
      dispatch(related_mapel({
          jurusan: student.jurusan_data.id,
        })
      )
    }, [dispatch, student])

    useEffect(() => {
      dispatch(related_post({
          mapel: mapel_data.id
      }))
    }, [dispatch, posts])

    return (
      <>
        <Routes>
            <Route path="" element={<Forum mapel_data={mapel_data}/>}></Route>
            {mapel && mapel.related_mapel.map((mapel_data, key) => {
                return(
                    <Route
                      path={`/create-post/*`}
                      key={key}
                      element={<CreatePost mapel_data={mapel_data}/>}
                    />
                )}
            )}
            {posts && posts.related_post.map((post, key) => (
                <>
                  <Route 
                  path={`/post/${post.id}/*`} key={key}
                  element={<DetailsPost/>}>
                  </Route>
                  <Route 
                  path={`/post/delete-post/${post.id}/*`} key={key}
                  element={<DeletePost/>}>
                  </Route>
                  <Route 
                  path={`/post/update-post/${post.id}/*`} key={key}
                  element={<UpdatePost/>}>
                  </Route>
                </>
            ))}
        </Routes>
        <Outlet></Outlet>
      </>
    )
}

export default ForumIndex

