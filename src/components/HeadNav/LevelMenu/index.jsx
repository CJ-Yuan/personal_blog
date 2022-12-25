//这是一级菜单
import React from 'react'
import MyNavLink from '../../MyNavLink'

export default function LevelMenu(props) {
  return (
    <div className='nav-menus-mulu'>
        <MyNavLink to={props.link}>
            <i className={'iconfont '+props.ioc} style={{marginRight:'4px'}}></i>
            <span>{props.title}</span>
        </MyNavLink>
    </div>
  )
}
