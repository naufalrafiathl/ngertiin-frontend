import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { related_mapel } from '../../redux/modules/materi/thunks';

const Style = styled.div`
.container-mapel {
  padding-top: 4rem;
  text-align: center;
  color: #396EB0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-container {
    padding: 7rem;
    width: 50vw;
    padding-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    
    a {
      .mapel-card {
        background-color: #FC997C;
        color: white;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        display: flex;
        padding: .3rem;
        margin: 10px;
        width: 200px;
        height: 80px;
  
        h1 {
          font-size: 1.5rem;
          display: flex;
          
          display: flex;
        }
      }
    }
  }
}
`

const Jurusan = () => {
    const dispatch = useDispatch()
    const { student } = useSelector((state) => state.auth)
    const { mapel } = useSelector((state) => state.materi)
    console.log(student)

    useEffect(() => {
      student && 
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
              <div className="container-mapel">
                <h2 className="materi-title">{mapel.jurusan_data.name}</h2>
                <div className="card-container">
                  {mapel.related_mapel.map((mapel_data, key) => (
                    <a href={`materi/${mapel_data.mapel.split(" ").join("-").toLowerCase()}`}>
                      <div className="mapel-card" key={key}>
                        <h1>{mapel_data.mapel}</h1>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              </>
            )}
        </Style>
      </>
    )
}

export default Jurusan

