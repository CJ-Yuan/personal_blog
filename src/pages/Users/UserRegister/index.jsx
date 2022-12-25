import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import api from '../../../api';
import {addCookei,seekCookei} from '../../../utils/operatecookie'
import './style.less'

export default function UserRegister() {
  const navigate =  useNavigate();
  // 用于储存用户输入的账号密码和验证码
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [authcode,setauthcode] = useState("");
  
  // form表单的执行函数
  function onSubmitHandle(event){
    //取消 form 跳转
    event.preventDefault({});
    // 调用canonical对账号密码进行验证
    const result = canonical(username,password)
    if(result){
      //通过账号密码验证后，再对验证码进行验证
      // 对验证码cookei进行查找 要么返回值 要么返回null
      let cookei = seekCookei('authcode')
      if(cookei === null){
        alert('验证码失效，请重新获取！')
      }else{
        // 和用户输入的验证码进行判断
        if(cookei === authcode){
          api.postregUser({
            email:username,
            password:password
          }).then((res)=>{
            switch(res.data.status){
              case 200:
                alert('注册成功');
                // 跳转到登录页面
                navigate('/users/userslogin');
                break;
              case 1:
                alert('用户已被注册');
                break;
              default:
              alert('未知原因注册失败，请重新尝试');
            }
          })
        }else{
          alert('请仔细核对验证码！注意区分大小写')
        }
      }
    }
  }

  //点击发送验证码的回调函数
  function sendemail(event){
    // 判断邮箱账号是否为空
    // if(username === ''){alert('请输入邮箱')}
    // 定义正则匹配，用于账号邮箱验证
    const canonicalaccount = /^[A-Za-z0-9]+([_][A-Za-z0-9]+)*@([A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
    // 获取按钮节点
    const btn = event.target
    // 调用canonical对账号邮箱进行验证
    let useraccount = canonicalaccount.test(username)
    //判断账号是否通过验证
    if(useraccount){
      // 发送网络请求
      api.postverify({
        email:username
      }).then((res)=>{
        //判断是否发送成功
        if(res.data.status === 200){
          //调用addCookei，将返回的验证码储存到cookie中，用于注册时验证
          addCookei('authcode',res.data.code,900)
          alert('验证码发送成功')
        }else{
          alert('验证码发送失败，请重新获取')
        }
      })
        //禁用按钮
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
      //按钮显30秒倒计时
      let second = 30;
      let counter = setInterval(function () {
          second--;
          if (second > 0) {
              btn.innerText = second + "秒后重新获取";
          }
      }, 1000);
      //30秒时间间隔到了之后清除倒计时，按钮恢复点击功能
      setTimeout(function () {
        //清除倒计时定时器
        clearInterval(counter);
        //按钮恢复
        btn.innerHTML = "获取验证码";
        btn.disabled = false;
        btn.style.cursor = "";
      }, 30000);
    }else{
      alert('请输入正确邮箱！')
    }
  }

  // 监听input
  function changeHandle(event){
    if(event.target.name === "username"){
      setUsername(event.target.value)
    }
    if(event.target.name === "password"){
      setPassword(event.target.value)
    }
    if(event.target.name === "authcode"){
      setauthcode(event.target.value)
    }
  }

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
        alert('邮箱格式错误')
      }else if(!userpassword){
        verify = false;
        alert('密码格式错误')
      }
      return verify
    }

  return (
    <form className='userregister' onSubmit={onSubmitHandle}>
      <input type="text" name="username" placeholder='邮箱号' onChange={changeHandle} className='userregister-yi' />
      <div className='userregister-code'>
        <input type="text" name="authcode" placeholder='验证码' onChange={changeHandle} className='userregister-yi' />
        <button onClick={sendemail} id='btn' type="button">发送</button>
      </div>
      <input type="text" name="password" placeholder='密码' onChange={changeHandle} className='userregister-yi' />
      <button className='userregister-button'>注册</button>
    </form>
  )
}
