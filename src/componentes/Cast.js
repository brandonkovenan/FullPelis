import React from 'react'
import styled from 'styled-components'
import TituloSeccion from './TituloSeccion'
import Actor from './Actor'


const Container = styled.div`
    display:flex;
    overflow:auto;
`


export default ({ cast }) => {
    if (cast) {
        return (
            <div>
                <TituloSeccion>Reparto:</TituloSeccion>
                <Container>
                    {cast.map(actor => <Actor actor={actor} />)}
                </Container>
            </div>
        )
    } else {
        return <div>Cargando...</div>
    }
}