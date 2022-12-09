//二次封装NavLink
import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

function MyNavLink(props) {

  return (
    <NavLink className="group" {...props}/>
  )
  
}


export default MyNavLink