// 这是移动端导航组件
import React from 'react'
import '../index.less'

export default function TopNav() {
  return (
    <nav className='nav-mc' style={{height:'60px'}}>
        <div className='nav-mc-wai'>
          {/* 名字 */}
          <div className='nav-mc-name'>
            <a href="/">Azreal</a>
          </div>
          <div style={{marginLeft:'auto'}}>
            {/* 搜索 */}
            <a href="/">
              <i className='iconfont icon-search' style={{fontSize:'24px'}}></i>
            </a>
            <a href="/" style={{marginLeft:'10px'}}>
              <i className='iconfont icon-category' style={{fontSize:'24px'}}></i>
            </a>
          </div>
        </div>
    </nav>
  )
}
