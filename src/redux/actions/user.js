//这是用于储存用户数据的
import {USER} from '../constants'

export function userinfo(user){
    return{
        type:USER,
        user
    }
}