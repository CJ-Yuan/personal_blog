import {TIME} from '../constants'

const defaulState = ''

const time = (state=defaulState,data)=>{
    switch(data.type){
        case TIME:
            return state=data
        default:
            return state
    }
}

export default time