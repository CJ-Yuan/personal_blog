//这是登录组件
import React,{useEffect,useState} from 'react'
import { Link,Routes,Route,Navigate} from 'react-router-dom'
import UsersLogin from './UsersLogin'
import UserRegister from './UserRegister'
import './style.less'

export default function Users() {
  const [titles,settitle] = useState('登录')
  const [select,setselect] = useState(true)
  useEffect(()=>{
    document.title = titles
      //对路径进行判断，防止刷新的时候出现BUG
    let urlParams = new URL(window.location.href);
    if(urlParams?.pathname === '/users/userslogin'){
      setselect(true)
      settitle("登录")
    }else if(urlParams?.pathname === '/users/usersregister'){
      setselect(false)
      settitle("注册")
    }
    
  },[titles])

  function yuan(){
    if(select){
      settitle("注册")
      setselect(false)
    }else{
      settitle("登录")
      setselect(true)
    }
  }
  return (
    <main className='userslogin' style={{padding:'60px 0px 136px'}}>
      <div className='userslogin-wai'>
        <div>
          {/* 头部 */}
          <div className='userslogin-banner'>
            <h1>{titles}</h1>
          </div>
          {/* 内容 */}
          <div className='userslogin-theme'>
            <div className='userslogin-wrapper'>
                {/* 注册路由 */}
                <Routes>
                  <Route path='/usersregister' element={<UserRegister/>} />
                  <Route path='/userslogin' element={<UsersLogin/>} />
                  <Route path='/' element={<Navigate to='/users/userslogin'/>}/>
                </Routes>
              <div className='login-tip'>
                {/* 路由链接 */}
                {
                  select? <Link to='./usersregister' onClick={yuan}><span style={{float:'left'}}>立即注册</span></Link> : <Link to='./userslogin' onClick={yuan}><span style={{float:'left'}}>已有账号?登录</span></Link>
                }
                <Link><span style={{float:"right"}}>忘记密码?</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
