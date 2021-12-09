import React from 'react'
import styled from 'styled-components';

const Style = styled.div`
    h2 {

    }
`

const MateriComp = ({materi_data}) => {
    console.log("matericomp")
    return (
      <>
        <Style>
            Materi
        </Style>
      </>
    )
}

export default MateriComp

