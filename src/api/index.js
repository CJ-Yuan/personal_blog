//api 统一管理
import axios from "axios"


//路径地址 
const path = {
    // baseUrl:"http://127.0.0.1:5566",
    //线上地址请求地址
    baseUrl:"http://120.48.48.128:5566", 
    //文章
    article:"/my/article",
    //留言板
    guestbook:"/mg/guestbook",
    //发送留言板数据
    sendguestbook:"/mg/sendguestbook",
    //获取总访问量
    visit:"/baidu/visit",
    //用户登录
    login:'/user/login',
    //发送验证码
    verify:'/user/verify',
    // 用户注册
    regUser:'/user/regUser',
    // token登录
    tokenlogin:'/user/tokenlogin',
    //获取用户数据
    userinfo:'/user/userinfo',
}

//请求方法

const api = {
    //文章数据
    article(){
        return axios.get(path.baseUrl + path.article)
    },
    //获取留言板数据
    guestbook(){
        return axios.get(path.baseUrl + path.guestbook)
    },
    //发送留言数据
    sendguestbook(params){
        return axios.post(path.baseUrl + path.sendguestbook,{params})
    },
    //获取总访问量
    getvisit(){
        return axios.get(path.baseUrl + path.visit)
    },
    //用户登录
    postlogin(params){
        return axios.post(path.baseUrl + path.login,{params})
    },
    //发送验证码
    postverify(params){
        return axios.post(path.baseUrl + path.verify,{params})
    },
    //用户注册
    postregUser(params){
        return axios.post(path.baseUrl + path.regUser,{params})
    },
    //token登录
    posttokenlogin(params){
        return axios.post(path.baseUrl + path.tokenlogin,{params})
    },
    getuserinfo(params){
        return axios.post(path.baseUrl + path.userinfo,{params})
    }
}



export default api;