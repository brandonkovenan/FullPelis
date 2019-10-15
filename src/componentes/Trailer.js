import React from 'react'
import styled from 'styled-components'

const urlbaseVideoYoutube = 'https://www.youtube.com/embed/'


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

export default ({ results }) => {
    if (results !== "video_generico") {
        return (
            <Container>
                <Video src={urlbaseVideoYoutube + results}></Video>
            </Container>
        )
    } else if (results === "video_generico") {
        return <div></div>
    } else {
        return <div>No funciona...</div>
    }
}
