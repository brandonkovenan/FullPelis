import tipos from './tipos'

export const updateFecha =()=>{
    return{
        type:tipos.UPDATE_FECHA,
        payload:new Date()
    }
}