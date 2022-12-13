//这是个人中心组件
import React,{useEffect,useState} from 'react'
//useSearchParams用于接收search参数 useLocation用于接收路由信息
import { useLocation,useNavigate } from 'react-router-dom'
//useSelector 用于读取数据 
import {useSelector} from 'react-redux'
import api from '../../api'
import './style.less'

export default function PersonalCenter() {
  // 用于储存用户信息
  const [userinfos,setuserinfos] = useState({});
  //读取redux中的user数据
  const data = useSelector(data => data.user.user)
  //接收路由信息
  const location = useLocation()
  // 用于路由跳转
  const navigate = useNavigate();
  // console.log(data)  

  useEffect(()=>{
    // 判断是否登录
    if(location.state){
      // 登录后判断 redux中user是否存在数据,存在的话发送请求获取用户信息
        console.log('登录成功',data)
        if(data){
          let ID = data.id
          api.getuserinfo({ID}).then((res)=>{
            if(res.data.status === 200){
              setuserinfos(res.data.data)
            }else{
              alert('获取用户信息失败，请稍后再试！')
            }
          })
        }else{
          console.log('不存在')
        }
    }else{
      // 如果用户没有登录，跳转到登录页面
      navigate('/users/userslogin')
    }
    
    
  },[data,location,navigate])

  return (
    <main className='personal' style={{padding:'60px 0px 136px'}}>
      <div className='personal-wai'>
        <div>
          {/* 头部 */}
          <div className='personal-banner'>
            <h1>{location.state ? '个人中心' : '请登录后查看'}</h1>
          </div>
          {/* 内容 */}
          <div className='personal-theme'>
            <div className='personal-wrapper'>
                <div className='personal-info'>
                    <span>基本信息</span>
                </div>
                <div className='personal-info-wrapper'>
                    <div className='personal-info-tou'>
                        <button className='personal-button-img'>
                            <div className='personal-imge'>
                            <img src={require('../../assets/images/头像.jpg')} alt="" />
                            </div>
                        </button>
                    </div>
                    <div className='personal-info-geren'>
                        <span>名称：</span>
                        <input type="text" name="name" placeholder={userinfos.username} className='personal-yi' />
                        <span>简介：</span>
                        <input type="text" name="nickname" placeholder={userinfos.nickname} className='personal-yi' />
                        <span>邮箱：</span>
                        <input type="text" name="email" placeholder={userinfos.email} className='personal-yi' />
                        <button className='geren-button'>修改</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}



