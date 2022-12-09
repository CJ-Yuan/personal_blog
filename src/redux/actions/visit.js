//这是用于储存网站访问量的
import {VISIT} from '../constants'

export function getvisit(visit){
    return{
        type:VISIT,
        visit
    }
}