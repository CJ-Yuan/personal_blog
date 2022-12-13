//这是用于储存用户数据的
import {USERINFO} from '../constants'

export function userinfo(userinfo){
    return{
        type:USERINFO,
        userinfo
    }
}