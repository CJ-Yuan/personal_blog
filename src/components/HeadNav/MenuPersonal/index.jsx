//这是登录后在导航栏显示个人中心和退出按钮
import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
// 用于判断token是否存在
import {seekCookei} from '../../../utils/operatecookie'
//useSelector 用于读取数据 
import {useSelector} from 'react-redux'

export default function MenuPersonal(props) {
    //通过传递过来数据，再通过传递state参数 传递给 个人中心页面用于判断是否登录
    const succeed = props.succeed
      //读取redux中的user数据
    const data = useSelector(data => data.userinfo.userinfo)
    const navigate = useNavigate();
    // 点击退出登录按钮的回调函数
    function yuan(){
        let token = seekCookei('token');
        if(token === null){
        }else{
            // 通过创建一个新的token，将值设置为空，时间设置为过去任何一个时间用来退出登录
            navigate('/home')
            document.cookie ="token=;max-age=0;path=/";
            window.location.reload();
        }
    }

  return (
    <div className='nav-menus-mulu'>
        {/* <img src={require('../../../assets/images/用户.png')} alt="" className='menupersonal-img'/> */}
        <img src={data.user_pic} alt="" className='nav-menus-mulu-img'/>
        <ul className='nav-menus-mulu-child'>
            <li>
                <Link to='/personalcenter' state={{succeed,data}}>
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
