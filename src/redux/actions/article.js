//这是用于储存文章数据的
import {ARTICLE} from '../constants'

export function getarticle(article){
    return{
        type:ARTICLE,
        article
    }
}