import tipos from '../actions/tipos'

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tipos.GET_BUSQUEDA_FULFILLED:
            const { results } = action.payload.data;
        
            return Object.assign({}, state, {
                data: results
            })
            case tipos.CLEAR_SEARCH:
            return Object.assign({},state,{
                data:[]
            })
        default:
            return state
    }
}