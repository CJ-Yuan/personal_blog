//这是一级菜单
import React from 'react'
import MyNavLink from '../../MyNavLink'
import './index.less'

export default function LevelMenu(props) {
  return (
    <div className='headnav-menus-mulu'>
        <MyNavLink to={props.link}>
            <i className={'iconfont '+props.styles} style={{marginRight:'4px'}}></i>
            <span>{props.title}</span>
        </MyNavLink>
    </div>
  )
}
