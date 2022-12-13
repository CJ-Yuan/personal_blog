import React,{useEffect,useState} from 'react'
import HeadNav from './components/HeadNav'
import Footer from './components/Footer'
// 用于token登录
import { tokenlogin } from './utils/tookenlogin'
// useRoutes 用于配置路由表 useLocation用于获取当前URL对象
import { useRoutes,useLocation} from 'react-router-dom'
import router from './router'

//useSelector 用于读取数据 useDispatch 用于获取Dispatch对象
import {useSelector} from 'react-redux'
// 导入css
import './assets/font_3777398_kq9bh0qug6/iconfont.css'
import './assets/font_3qv7jx9tfny/iconfont.css'
import './app.less'

export default function App() {
  //读取redux中的数据
  const data = useSelector(data => data)
  //获取前路由路径
  const [url,useurl] = useState('');
  //用于判断是否需要渲染底部组件
  const [footers,setfooters] = useState(false);
  //用于判断是否登录
  const [succeed,setsucceed] = useState(false)
  // 路由表
  const element = useRoutes(router)
  // 获取当前路由路径
  const location = useLocation()


  useEffect(()=>{

    //判断当前路由,是否需要footer
    useurl(location.pathname)
    switch(url){
      case '/home':
        setfooters(true)
        break;
      case '/aboutme':
        setfooters(true)
        break;
      case '/login':
        setfooters(true)
        break;
      case '/personalcenter':
        setfooters(true)
        break;
      case '/users/userslogin':
        setfooters(true)
        break;
        case '/users/usersregister':
        setfooters(true)
        break;
      default:
        setfooters(false)
    }
    //用于执行token登录,后进行判断
    if(succeed){
    }else{
      // 由于返回的的是 Promise 使用需要then获取里面的值，并进行判断是否登录成功
      tokenlogin(data).then((e)=>{
        if(e){
          setsucceed(true);
        }else{
          setsucceed(false);
        }
      })
      
      // console.log(login,'123123')
      
    }
    
  },[location.pathname,data,url])
return (
    <div className='app'>
      <header 
        style={{
          height:'60px',
          marginTop:'0px',
          transform:'translateY(0px)',
          left:'0px',
          right:'0px'
      }} className="header-app">
        <HeadNav succeed={succeed}/>
      </header>
        {element}
        
        {
          footers? <footer><Footer /></footer> : ''
        }
    </div>
  )
}
