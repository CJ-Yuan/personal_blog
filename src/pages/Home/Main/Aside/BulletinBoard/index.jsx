//这是网站公告组件
import React from 'react'
import './style.less'

export default function BulletinBoard() {
  return (
    <div className='bulletinboard-card'>
        <div className='bulletinboard-kuang' style={{fontSize:'20px'}}>
            <i className='iconfont icon-notice'></i>
            公告 
        </div> 
        <div className='bulletinboard-kuang' style={{fontSize:'0.875rem'}}>网站功能不断完善中，敬请期待！</div>
    </div>
  )
}
