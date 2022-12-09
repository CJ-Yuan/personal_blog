import React,{useEffect,useState} from 'react'
import HeadNav from './components/HeadNav'
import Footer from './components/Footer'
// useRoutes 用于配置路由表
import { useRoutes } from 'react-router-dom'
import router from './router'
import './assets/font_3777398_kq9bh0qug6/iconfont.css'
import './assets/font_msvh26a9rw/iconfont.css'
import './app.less'

export default function App() {
  const [url,setuel] = useState('');
  const [footers,setfooters] = useState(false);
  const element = useRoutes(router)
  let urlParams = new URL(window.location.href);
  useEffect(()=>{
    //获取当前路由路径
    setuel(urlParams?.pathname)
    switch(url){
      case '/home':
        setfooters(true)
        break;
      case '/aboutme':
        setfooters(true)
        break;
      default:
        setfooters(false)
    }
    
  },[urlParams,url])
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
        <HeadNav />
      </header>
        {element}
        
        {
          footers? <footer><Footer /></footer> : ''
        }
    </div>
  )
}
