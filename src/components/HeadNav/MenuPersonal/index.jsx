//这是登录后在导航栏显示个人中心和退出按钮
import React from 'react'
import { Link } from 'react-router-dom'
// 用于判断token是否存在
import {seekToken} from '../../../utils/tookenlogin'
import './style.less'

export default function MenuPersonal(props) {
    //通过传递过来数据，再通过传递state参数 传递给 个人中心页面用于判断是否登录
    const succeed = props.succeed
    function yuan(){
        let to = seekToken('token');
        
        if(to === null){

        }else{
            // 创建一个新的token，将值设置为空，时间设置为过去任何一个时间
            document.cookie ="token=;max-age=0;path=/";
            window.location.reload();
        }
    }

  return (
    <div className='menupersonal'>
        <img src={require('../../../assets/images/用户.png')} alt="" className='menupersonal-img'/>
        <ul className='menupersonal-submenu'>
            <li>

                <Link to='/personalcenter' state={succeed}>
                    <i className='iconfont icon-usercenter1' style={{marginRight:'4px'}}></i>
                    个人中心
                </Link>
            </li>
            <li>
                {/*  */}
                <Link onClick={yuan}>  
                    <i className='iconfont icon-tuichu1' style={{marginRight:'4px'}}></i>
                    退出
                </Link>
            </li>
        </ul>
    </div>
  )
}
