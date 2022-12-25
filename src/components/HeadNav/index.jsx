//这是导航栏组件
import React from 'react'
import LevelMenu from './LevelMenu'
import MultilevelMenu from './MultilevelMenu'
import MenuPersonal from './MenuPersonal'
import './index.less'

export default function HeadNav(props) {
    //用于判断是否登录
    let succeed = props.succeed
    // console.log(props.yuan,'123')
    //这是发现的子选项
  const yule = [
    {title:'相册',ioc:'icon-xiangce1',link:''},
    {title:'动态',ioc:'icon-41shuoshuo',link:''},
    {title:'游戏',ioc:'icon-youxi',link:''},
  ]

  return (
    <nav className='nav' style={{height:'60px'}}>
      {/* PC端 */}
      <div className='nav-pc'>
        {/* 名字 */}
        <div className='nav-name'>
          <span>Azreal</span>
        </div>
        {/* 菜单 */}
        <div className='nav-menus'>

          {/* 搜索 */}
          <LevelMenu ioc={'icon-search'} title={'搜索'}/>

          {/* 首页 */}
          <LevelMenu ioc={'icon-home'} title={'首页'} link={'/home'}/>

          {/* 发现 */}
          <MultilevelMenu ioc={'icon-faxian'} title={'发现'} childopts={yule}/>

          {/* 留言板 */}
          <LevelMenu ioc={'icon-liuyan1'} title={'留言板'} link={'/guestbook'}/>

          {/* 关于 */}
          <LevelMenu ioc={'icon-dongtai'} title={'关于'} link={'/aboutme'}/>

          {
            //判断是否存在登录数据而进行渲染 ture 有 false 没有
            succeed ? <MenuPersonal succeed={succeed}/> : <LevelMenu ioc={'icon-denglu'} title={'登录'} link={'/users'}/>
          }
          
        </div>
      </div>
    </nav>
  )
}
