import React from 'react'
// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';
import styled from 'styled-components'
import Search from './Search'
import { connect } from "react-redux";
//ACCIONES
import { getBusqueda, clearSearch } from '../Redux/actions/moviesActions'

// const Titulo = styled.h2`
//     font-family:'Open Sans', sans-serif;
//     position: absolute;

// `
const Contendor = styled.div`
    position:absolute;
    width:100%;
    background:rgba(0,0,0,0.5);
    color:white;
    display:flex;
    margin-right:5px;
    align-items:center;
    justify-content:space-between;
    color:white;
    font-size:20px;
    text-shadow: 2px 2px 2px black;
    
    >a{
        margin-left: 20px;
        color:#EFB300;
        text-decoration:none;
    }
    z-index:100;
    >h2{
        font-family:'Open Sans', sans-serif;
        text-align:center;
        color:#EFB300;
        text-shadow: 2px 2px 2px black;
    }
`

const Fecha = styled.div`
    position: absolute;
    margin-left: 64%;
    color:#EFB300;

 `
//  const Search =styled.div`
//     margin-left: 75%;
 
//  `

class Header extends React.Component {
    state = {
        search_text: ""
    }
    onChangeSearch = evt => {
        const { value } = evt.target
        if (value) {
            this.props.getBusqueda(value)
            this.setState({
                search_text: value
            })
        } else {
            this.onClearTextSearch()
        }

    }
    onClearTextSearch = () => {
        this.setState({
            search_text: ""
        })
        this.props.clearSearch()
    }
    render() {
        return (
            <Contendor>
                <a href="http://localhost:3000"> <h3>Home</h3></a>
                <h2>Full Peliculas</h2>
                {this.props.path === "/" &&
                    <Search
                        onChangeSearch={this.onChangeSearch}
                        clear={this.onClearTextSearch}
                        search_text={this.state.search_text}
                    />}
                <Fecha>{this.props.test.fecha.toLocaleString()}</Fecha>
            </Contendor>
        );
    }
}
function mapStateToProps({ test }) {
    return { test }
}
export default connect(mapStateToProps, {
    getBusqueda,
    clearSearch
})(Header)