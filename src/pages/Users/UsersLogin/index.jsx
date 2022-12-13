//用户登录
import React,{useState} from 'react'
//useNavigate用于路由跳转
import { useNavigate} from "react-router-dom"
import api from '../../../api';
import './style.less'


export default function UsersLogin() {
  // 用于储存用户输入的账号密码
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  // 定义一个验证时执行的函数
  function canonical(user,passw){
    let verify = true;
    //使用正则限制账号和密码
    const canonicalaccount = /^[A-Za-z0-9]+([_][A-Za-z0-9]+)*@([A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
    // 密码至少包含 数字和英文，长度6-20
    const canonicalpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    // 对账号密码进行验证
    let useraccount = canonicalaccount.test(user)
    let userpassword = canonicalpassword.test(passw)
    if(!useraccount){
      verify = false;
      alert('邮箱错误')
    }else if(!userpassword){
      verify = false;
      alert('密码错误')
    }
    return verify
  }


  // form表单的回调函数
  function onSubmitHandle(event){
    //取消 form 跳转
    event.preventDefault();
    // 掉用canonical对账号密码进行验证
    const result =  canonical(username,password)
    // 通过验证后发送数据
    if(result){
      api.postlogin({
        username:username,
        password:password
      }).then((res)=>{
        // 请求成功后，将返回的数据进行判断
        switch(res.data.status){
          case 200:
            // 将返回接收到的Token储存到cookie中,有效期为10个小时
            let key = 'token'
            let value = res.data.token
            let twDays = 36000 //10个小时
            document.cookie = `${key}=${value}; Path=/; max-age=${twDays};`
            alert('登录成功');
            navigate('/home')
            break;
          case 1:
            alert('用户尚未注册');
            break;
          default:
            alert('登录失败');
        }
      })
    }
  }

  // 监听 input
  function changeHandle(event){
    if(event.target.name === "username"){
      setUsername(event.target.value)
    }
    if(event.target.name === "password"){
      setPassword(event.target.value)
    }
  }

  return (
    <form className='login' onSubmit={onSubmitHandle}>
        {/* <h1>用户登录</h1> */}
          <input type="text" name="username" onChange={changeHandle} placeholder='邮箱号' className='login-signin login-yi' />
        <div className='login-error' style={{display:'none'}}>
          <span>错误信息</span>
        </div>
          <input type="password" name="password" onChange={changeHandle} placeholder='密码' className='login-signin login-yi'/>
        <button>登录</button>
    </form>
  )
}
