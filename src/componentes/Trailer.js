import React from 'react'
import styled from 'styled-components'
// import TituloTrailer from './TituloTrailer'



const urlbaseVideoYoutube = 'https://www.youtube.com/embed/'


// const Cargando = styled.div`
//     text-align:center;
//     font-size:22px;


// `;



const Container = styled.div`
    position:absolute;
`

const Video = styled.iframe`
    width: 500px;
    height: 300px;
    position: relative;
    border-radius: 1%;
    margin-top: 31%;
    margin-left: 145%;
`;


// console.log(Video, "No esta pegando el key del video trailer a la Url de Youtube");

export default ({ results }) => {
    if (results !== "video_generico") {
        return (
            <Container>
                {/* <TituloTrailer>Trailer de la Pelicula: </TituloTrailer> */}
                <Video src={urlbaseVideoYoutube + results}></Video>
            </Container>
        )
    } else if (results === "video_generico") {
        return <div></div>
    } else {
        return <div>No funciona...</div>
    }
}
