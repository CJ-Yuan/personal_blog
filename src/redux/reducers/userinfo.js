import {USERINFO} from '../constants'

const defaulState = {
    userinfo:{
        id:'游客',
        name:'游客'
    } 
}

const userinfo = (state=defaulState,data)=>{
    switch(data.type){
        case USERINFO:
            return state=data
        default:
            return state
    }
}

export default userinfo