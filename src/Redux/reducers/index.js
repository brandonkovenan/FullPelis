import { combineReducers } from "redux";
import test from "./testReducers";
import estrenos from "./estrenosReducer";
import proximos_estrenos from "./proximosEstrenosReducer";
import pelicula_detalle from "./peliculaDetalleReducer";
import creditos from "./creditosReducer";
import search from "./searchReducer";
import trailer from "./trailerReducer";

export default combineReducers({
  test,
  estrenos,
  proximos_estrenos,
  pelicula_detalle,
  creditos,
  search,
  trailer,
});
