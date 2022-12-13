import {USER} from '../constants'

const defaulState = {}

const user = (state=defaulState,data)=>{
    switch(data.type){
        case USER:
            return state=data
        default:
            return state
    }
}

export default user