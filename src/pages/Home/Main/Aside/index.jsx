//这是首页内容组件中的卡片组件
import React from 'react'
import './style.less'

import Message from './Message'
import BulletinBoard from './BulletinBoard'
import SiteNews from './SiteNews'

function Aside() {
  return (
    <div className='aside'>
      <div className='aside-div'>
        <Message />
        <BulletinBoard />
        <SiteNews/>
      </div>
    </div>
  )
}


export default Aside