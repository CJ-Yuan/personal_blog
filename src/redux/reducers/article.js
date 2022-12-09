import {ARTICLE} from '../constants'

const defaulState = []

const arti = (state=defaulState,action)=>{
    switch(action.type){
        case ARTICLE:
            return state=[...action.article]
        default:
            return state
    }
}

export default arti