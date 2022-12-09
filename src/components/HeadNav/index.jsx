//这是头部导航栏
import React from 'react'
import LevelMenu from './LevelMenu'
import MultilevelMenu from './MultilevelMenu'
import './index.less'

export default function HeadNav() {
  //这是娱乐的子选项
  const yule = [
    {title:'游戏',styles:'icon-service-fill',link:''},
  ]

  return (
    <nav className='headnav' style={{height:'60px'}}>
      {/* PC端 */}
      <div className='headnav-pc'>
        {/* 名字 */}
        <div className='headnav-name'>
          <a href="javascript">Azreal</a>
        </div>
        {/* 菜单 */}
        <div className='headnav-menus'>

          {/* 搜索 */}
          <LevelMenu styles={'icon-search'} title={'搜索'}/>

          {/* 首页 */}
          <LevelMenu styles={'icon-home'} title={'首页'} link={'/home'}/>

          {/* 娱乐 */}
          <MultilevelMenu styles={'icon-play'} title={'娱乐'} childopts={yule}/>

          {/* 留言板 */}
          <LevelMenu styles={'icon-suggest'} title={'留言板'} link={'/guestbook'}/>

          {/* 关于 */}
          <LevelMenu styles={'icon-vip'} title={'关于'} link={'/aboutme'}/>
        </div>
      </div>
    </nav>
  )
}
