import {VISIT} from '../constants'

const defaulState = []

const visit = (state=defaulState,data)=>{
    switch(data.type){
        case VISIT:
            return state=data
        default:
            return state
    }
}

export default visit