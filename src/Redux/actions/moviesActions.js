import tipos from "./tipos";
import axios from "axios";

const urlBase = "https://api.themoviedb.org/3/movie/";
const urlBaseSearch = "https://api.themoviedb.org/3/";
const llave = "28b8463007feb8125cddcf6eef4fec54";

export const getEstrenos = () => (dispatch) => {
  dispatch({
    type: tipos.GET_ESTRENOS,
    payload: axios.get(`${urlBase}now_playing?api_key=${llave}&language=es`),
  });
};

export const getProximosEstrenos = () => (dispatch) => {
  dispatch({
    type: tipos.GET_PROXIMOS_ESTRENOS,
    payload: axios.get(`${urlBase}upcoming?api_key=${llave}&language=es`),
  });
};

export const getCreditos = (peliculaid) => (dispatch) => {
  dispatch({
    type: tipos.GET_CREDITOS,
    payload: axios.get(
      `${urlBase}${peliculaid}/credits?api_key=${llave}&language=es`
    ),
  });
};

export const getPeliculaDetalle = (peliculaid) => (dispatch) => {
  dispatch({
    type: tipos.GET_PELICULA_DETALLE,
    payload: axios.get(`${urlBase}${peliculaid}?api_key=${llave}&language=es`),
  });
};
export const getBusqueda = (text) => (dispatch) => {
  dispatch({
    type: tipos.GET_BUSQUEDA,
    payload: axios.get(
      `${urlBaseSearch}search/movie?query=${text}&api_key=${llave}&language=es`
    ),
  });
};

export const clearSearch = () => {
  return {
    type: tipos.CLEAR_SEARCH,
  };
};

export const getTrailer = (peliculaid) => (dispatch) => {
  dispatch({
    type: tipos.GET_TRAILER,
    payload: axios.get(
      `${urlBase}${peliculaid}/videos?api_key=${llave}&language=es`
    ),
  });
};
