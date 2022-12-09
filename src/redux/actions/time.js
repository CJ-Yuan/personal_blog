//这是用于储存网站运行时间的
import {TIME} from '../constants'

export function gettime(time){
    return{
        type:TIME,
        time
    }
}