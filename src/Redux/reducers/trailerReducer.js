import tipos from "../actions/tipos";

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case tipos.GET_TRAILER_FULFILLED:
      const { results } = action.payload.data;
      if (results.length !== 0) {
        return Object.assign({}, state, {
          data: results[0].key,
        });
      } else {
        return Object.assign({}, state, {
          data: "video_generico",
        });
      }
    default:
      return state;
  }
};
