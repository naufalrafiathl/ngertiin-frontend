import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { get_materi } from '../../redux/modules/materi/thunks';

const Style = styled.div`
    h2 {

    }
`

const MateriComp = ({materi_data}) => {
    const { materi } = useSelector((state) => state.jurusan)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_materi({materi_id: materi_data.id}))
    }, [materi_data])
    return (
      <>
      {
        materi && 
        <Style>
          <div className="materi-container">
            <h2>{materi.materi_data.judul}</h2>
            <p>{materi.materi_data.materi}</p>
          </div>
        </Style>
      }
      </>
    )
}

export default MateriComp

