import React from 'react'
import { connect } from "react-redux";
import Destaque from '../componentes/Destaque'
import Trailer from '../componentes/Trailer';
import Cast from '../componentes/Cast'
import Header from '../componentes/Header'
import styled from 'styled-components'
//ACCIONES:
import { getCreditos, getPeliculaDetalle, getTrailer } from '../Redux/actions/moviesActions'

const Detalle = styled.div`

`
class PeliculaDetalle extends React.Component {
    state = {
        pelicula: ""
    }
    componentDidMount() {
        const { peliculaid } = this.props.match.params
        this.props.getPeliculaDetalle(peliculaid)
        this.props.getTrailer(peliculaid)
        this.props.getCreditos(peliculaid)

    }

    render() {
        return (
            <Detalle>
                <Header fecha={this.props.test.fecha} />
                <Trailer results={this.props.trailer.data}></Trailer>
                <Destaque pelicula={this.props.pelicula_detalle.data}></Destaque>
                <Cast cast={this.props.creditos.data}></Cast>
            </Detalle>
        );
    }
}
function mapStateToProps({ creditos, pelicula_detalle, test, trailer }) {
    return { creditos, pelicula_detalle, test, trailer }

}
export default connect(mapStateToProps, {
    getCreditos, getPeliculaDetalle, getTrailer
})(PeliculaDetalle)