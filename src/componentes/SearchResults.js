import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const urlbaseImage = 'https://image.tmdb.org/t/p/w185'


const Contenedor = styled.div`
    display:flex;
    background:black;
    
    flex-wrap:wrap;


`
const Item = styled(Link)`
    background:url(${props => urlbaseImage + props.pelicula.poster_path}) no-repeat;
    background-size:cover;
    height:300px;
    width:200px;

`

export default ({ data }) => {
    return (
        <Contenedor>
            {data.map(pelicula => (
                <Item key={pelicula.id} pelicula={pelicula} to={`/detalles/${pelicula.id}`} />
            ))}
        </Contenedor>
    )
}