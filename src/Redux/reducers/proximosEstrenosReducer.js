import tipos from "../actions/tipos";

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case tipos.GET_PROXIMOS_ESTRENOS_FULFILLED:
      const { results } = action.payload.data;
      return Object.assign({}, state, {
        data: results,
      });
    default:
      return state;
  }
};
