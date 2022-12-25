//这是个人中心组件
import React,{useEffect,useState} from 'react'
//useSearchParams用于接收search参数 useLocation用于接收路由信息
import { useLocation } from 'react-router-dom'
import AmendPortrait from './AmendPortrait';
import './style.less'

export default function PersonalCenter() {
  // 用于储存用户信息
  const [userinfos,setuserinfos] = useState({});
  //接收路由信息
  const location = useLocation()
  useEffect(()=>{
    setuserinfos(location.state.data)
  },[location])

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
                    {/* 修改头像 */}
                    <AmendPortrait image={userinfos.user_pic}/>
                    <div className='personal-info-geren'>
                        <span>名称：</span>
                        <input type="text" name="name" placeholder={userinfos.name} className='personal-yi' />
                        <span>简介：</span>
                        <input type="text" name="nickname" placeholder={userinfos.nickname} className='personal-yi' />
                        <span>邮箱：</span>
                        {/* <input type="text" name="email" placeholder={userinfos.email} className='personal-yi' /> */}
                        <span className='personal-yi'>{userinfos.email}</span>
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



