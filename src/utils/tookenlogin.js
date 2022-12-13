//使用token 进行登录
import api from "../api";

import store  from "../redux/store";
import * as loginActions from '../redux/actions/user'


export function tokenlogin(data){
    
    let pantoken = seekToken('token')
    if(pantoken === null){
        // 通过创建一个 Promise 返回flase
        let Pr = new Promise((getapi)=>{
            let jjj = getapi(false);
            return jjj
        });
        return Pr
    }else{
        let jieshou = getapi(pantoken)
        return jieshou;
    }
}

// 定义一个请求函数用于token登录
async function getapi(code){
    let panduan = null;
    await api.posttokenlogin({code}).then((res)=>{
        if(res.data.status === 200){
            const data = res.data.user
            //登录成功后将数据存储到redux中
            store.dispatch(loginActions.userinfo(data))
            panduan=true
        }else{
            // 登录失败
            panduan=false
        }
    })
    return panduan
}

//定义一个查找函数，用于查询token是否存在
export function seekToken(name){
    // 拆分 cookie 字符串
    var cookieArr = document.cookie.split(";");
    // 循环遍历数组元素
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
        if(name === cookiePair[0].trim()) {
            // 解码cookie值并返回
            return cookiePair[1];
        }
    }
    // 如果未找到，则返回null
    return null;
}




// 废弃方案
        // 判断用户是否存在token有的话自动登录
        //将cookie 转换成数组
        // let cookieverify = document.cookie.split(';').map(cookie=>cookie.split('='))
        // //将转换成数组数据，再转换成对象
        // const kon = Object.fromEntries(cookieverify)
        // const code1 = kon[" token"];
        // const code2 = kon.token;
        // if(code1){
        //    let jieshou = getapi(code1)
        //     return jieshou;
        // }else if(code2){
        //     let jieshou = getapi(code2)
        //     return jieshou;
        // }else{
        //     // 通过创建一个 Promise 返回flase
        //     let Pr = new Promise((getapi)=>{
        //         let jjj = getapi(false);
        //         return jjj
        //     });
        //     return Pr
        // }