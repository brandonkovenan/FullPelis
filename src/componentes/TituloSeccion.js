import styled from 'styled-components'
import Titulo from '..//img/Titulo.jpg'

const TituloSeccion = styled.h1`
background-image: url(${Titulo});
background-size: cover;
color: #EFB300;
margin:0;
padding:12px;
font-family:"Rock Salt", cursive;
text-align:center;
text-shadow: 3px 3px 3px Black;
position:relative;

    >background-image: url(${Titulo}){
        width: cover;
        position: center center;


    }

`

export default TituloSeccion 


//----------------------------------------------------//
