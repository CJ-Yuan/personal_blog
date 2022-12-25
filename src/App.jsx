import React,{useEffect,useState} from 'react'
import { Layout } from '@douyinfe/semi-ui';
import HeadNav from './components/HeadNav'
import TopNav from './components/HeadNav/TopNav';
import Footers from './components/Footer'
// 用于token获取用户数据
import { userinfo } from './utils/tookenlogin'
// useRoutes 用于配置路由表 useLocation用于获取当前URL对象
import { useRoutes,useLocation} from 'react-router-dom'
import router from './router'

// 导入css
import './assets/font_3777398_kq9bh0qug6/iconfont.css'
import './assets/font_3qv7jx9tfny/iconfont.css'
import './app.less'

const App = ()=> {
  const { Header, Footer } = Layout;

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
  // 监听滚动条事件的回调，用于导航栏
  const roll = () => {
    // 获取滚动条的位置 0 代表着在最顶部 
    let yf = window.pageYOffset;
    let header = document.getElementsByClassName('header-app')[0]
    if(yf > 10 ){
      header.style.cssText = 'background-color:rgb(115, 113, 113);opacity:0.8;';
    }else{
      header.style.cssText = '';
    }
  }

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
  // 判断是否是登录状态
    if(succeed){
    }else{
      // 由于返回的的是 Promise 使用需要then获取里面的值，并进行判断是否登录成功
      userinfo().then((e)=>{
        if(e){
          setsucceed(true);
        }else{
          setsucceed(false);
        }
      });
    }
    // 监听滚动条事件
    window.addEventListener('scroll',roll)
  },[location.pathname,url,succeed])
  
return (
    <div className='app'>
      <Header className="header-app">
        <HeadNav succeed={succeed}/>
        <TopNav />
      </Header>
        {element}
        {
          footers? <Footer><Footers /></Footer> : ''
        }
    </div>
  )
}


export default App