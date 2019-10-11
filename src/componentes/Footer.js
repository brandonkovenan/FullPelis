import React from 'react'
import styled from 'styled-components'
import Logo from '../img/logomdb.png'



const Footer = styled.div`
    background:rgba(32,35,42,1);
    padding:20px;
    text-align:center;
`


export default () =>
    (
        <Footer>
            <img src={Logo} alt="Logo moviedb" width="200" height="75"></img>
        </Footer>
    )