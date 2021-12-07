import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { related_mapel } from '../../redux/modules/materi/thunks';

const Style = styled.div`
    h2 {

    }
`

const Jurusan = () => {
    const dispatch = useDispatch()
    const { student } = useSelector((state) => state.auth)
    const { mapel } = useSelector((state) => state.materi)

    useEffect(() => {
        dispatch(related_mapel({
            jurusan: student.jurusan_data.id,
          })
        )
      }, [dispatch, student])
    return (
      <>
        <Style>
            {mapel && (
              <>
                <h2 className="materi-title">{mapel.jurusan_data.name}</h2>
                <div className="mapel-container">
                  {mapel.related_mapel.map((mapel_data, key) => (
                    <div className="mapel" key={key}>{mapel_data.mapel}</div>
                  ))}
                </div>
              </>
            )}
        </Style>
      </>
    )
}

export default Jurusan

