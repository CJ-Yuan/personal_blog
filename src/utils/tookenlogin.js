//使用token 进行登录
import api from "../api";
import {seekCookei} from './operatecookie'

import store  from "../redux/store";
import * as loginActions from '../redux/actions/userinfo'
import tookenlogin from './spliceurl'


export function userinfo(){
    // 判断是否存在token
    let token = seekCookei('token');
    if(token === null){
        // 通过创建一个Promise 返回flase
        let promise = new Promise((e)=>{
            let pr = e(false);
            return pr
        });
        return promise
    }else{
        //调用getuserinfo返回回来的是Promise
        const jieguo =  getuserinfo(token);
        return jieguo
    }
}

// 定义一个请求函数用于token获取获取数据
async function getuserinfo(token){
    let panduan = null;
    await api.getuserinfo({token}).then((res)=>{
        // 判断是否登录成功
        if(res.data.status === 200){
            //登录成功后将用户信息存储到redux中
            const data = res.data.userinfo
            //调用tookenlogin拼接头像请求的url
            let picUrl =  tookenlogin(data.user_pic)
            // 和拼接好的Url合并
            const data1 = {...res.data.userinfo,user_pic:picUrl}
            
            store.dispatch(loginActions.userinfo(data1))
            panduan = true
        }else{
            // 登录失败
            panduan = false
        }
    })
    return panduan;
}













// export function tokenlogin(data){
//     // 判断是否存在token
//     let pantoken = seekCookei('token')
//     if(pantoken === null){
//         // 通过创建一个 Promise 返回flase
//         let Pr = new Promise((getapi)=>{
//             let jjj = getapi(false);
//             return jjj
//         });
//         return Pr
//     }else{
//         let jieshou = getapi(pantoken)
//         return jieshou;
//     }
// }

// // 定义一个请求函数用于token登录
// async function getapi(code){
//     let panduan = null;
//     await api.getuserinfo({code}).then((res)=>{
//         if(res.data.status === 200){
//             const data = res.data.user
//             //登录成功后将数据存储到redux中
//             store.dispatch(loginActions.userinfo(data))
//             panduan=true
//         }else{
//             // 登录失败
//             panduan=false
//         }
//     })
//     return panduan
// }

//定义一个查找函数，用于查询token是否存在
// export function seekToken(name){
//     // 拆分 cookie 字符串
//     var cookieArr = document.cookie.split(";");
//     // 循环遍历数组元素
//     for(var i = 0; i < cookieArr.length; i++) {
//         var cookiePair = cookieArr[i].split("=");
//         /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
//         if(name === cookiePair[0].trim()) {
//             // 解码cookie值并返回
//             return cookiePair[1];
//         }
//     }
//     // 如果未找到，则返回null
//     return null;
// }




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