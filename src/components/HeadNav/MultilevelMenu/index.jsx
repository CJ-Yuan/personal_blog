//这是多级菜单
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import MyNavLink from '../../MyNavLink'



export default function MultilevelMenu(props) {
    //通过状态来改变样式
    const [isHover,setHovet] = useState("icon-arrow-down");
  return (
    <div className='nav-menus-mulu'>
        {/* 通过鼠标移入移出来修改状态中的样式 */}
        <MyNavLink to={props.link} onMouseEnter={()=>{setHovet("icon-arrow-up")}} onMouseLeave={()=>{setHovet("icon-arrow-down")}}>
            <i className={'iconfont '+ props.ioc} style={{marginRight:'4px'}}></i>
            <span>{props.title}</span>
            <i className={`iconfont ${isHover}`}></i>
        </MyNavLink>
        <ul className='nav-menus-mulu-child'>
            {
                props.childopts.map((ele,index)=>{
                return <li key={index}>
                            <Link to={ele.link}>
                            <i className={'iconfont '+ele.ioc} style={{marginRight:'4px'}}></i>
                            <span>{ele.title}</span>
                            </Link>
                        </li>
                })
            }
        </ul>
    </div>
  )
}
