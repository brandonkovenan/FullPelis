import tipos from '../actions/tipos'

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tipos.GET_CREDITOS_FULFILLED:
            const { cast } = action.payload.data
            return Object.assign({}, state, {
                data: cast

            });

        default:
            return state
    }
}