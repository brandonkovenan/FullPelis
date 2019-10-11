import React from 'react'
import styled from 'styled-components'

const urlbaseImage = 'https://image.tmdb.org/t/p/w185'

const Container = styled.div`
    border:2px solid gold;
    margin:2px;
    background:#20232A;
    text-align:center;

`


const Foto = styled.img`

`


const Nombre = styled.span`
    backgorund:rgba(0,0,0,0.5);
    color:white;

`

export default ({ actor }) => (
    <Container>
        <Foto src={actor.profile_path ? urlbaseImage + actor.profile_path : "http://dummyimage.com/185&text=no-image"}></Foto>
        <Nombre>{actor.name}</Nombre>
    </Container>
)