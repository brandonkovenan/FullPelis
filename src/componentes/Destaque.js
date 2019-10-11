import React from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const urlbaseImage = 'https://image.tmdb.org/t/p/w780'

const Inicio = styled.div`
    background: url(${props => urlbaseImage + props.pelicula.backdrop_path}) no-repeat;
    color:white;
    background-size:cover;
    height:700px;
    font-size:22px;
    font-family:"Anton", sans-serif;
`


const PeliculaInfo = styled.div`
    position:relative;
    color:rgba()205,220,57,1;
    text-shadow: 2px 2px 2px Black;


`
const PeliculaInfoContent = styled.div`
    position:absolute;
    top:150px;
    left:2%;
    background:rgba(28,50,56,0.5);
    padding:10px;
`

const PeliculaInfoTitulo = styled.div`
    color:rgba(255,179,0,1);
    font-family:"Rock Salt", cursive;
`
const PeliculaInfoOverview = styled.div`
    max-width:550px;
    font-size: 14px;

`
const VotoPromedio = styled.span`
    font-family:"Cinzel",serif;

`
const Cargando = styled.div`
    text-align:center;
    font-size:22px;


`


const VotoEstilo = styled.div`
     border-radius:9%;
     margin-right:84%;
`

export default ({ pelicula }) => {
    if (pelicula) {
        return (
            <div>
                <Inicio pelicula={pelicula}>
                    <PeliculaInfo>
                        <PeliculaInfoContent>
                            <PeliculaInfoTitulo>{pelicula.title}</PeliculaInfoTitulo>
                            <PeliculaInfoOverview>{pelicula.overview}</PeliculaInfoOverview>
                            <VotoEstilo><VotoPromedio>
                                <CircularProgressbar value={pelicula.vote_average * 10} background={true} text={`${pelicula.vote_average}/10`}
                                    styles={buildStyles({
                                        textColor: 'green',
                                        trailColor: 'white',
                                        backgroundColor: 'black',
                                        textSize: '30px',
                                        pathTransition: 1,
                                        pathColor: `${pelicula.vote_average > 5.0 ? "green" : (pelicula.vote_average > 4.0) ? "yellow" : "red"}`,
                                    })}

                                />
                            </VotoPromedio></VotoEstilo>
                        </PeliculaInfoContent>
                    </PeliculaInfo>
                </Inicio>
            </div>
        )
    }
    else {
        return (
            <Cargando>Cargando...</Cargando>
        )
    }
}