/*
    该文件用于汇众所有的 reducer 为一个总的 reducer 
*/ 

//combineReducers 用于合并 reducer
import {combineReducers} from 'redux';


import article from './article'
import time from './time';
import visit from './visit'
import user from './user';
import userinfo from './userinfo';

const rootReducer = combineReducers({
    article,
    time,
    visit,
    user,
    userinfo
})

export default rootReducer