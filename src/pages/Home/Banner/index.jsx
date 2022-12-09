//这是首页头部组件
import React,{useState,useEffect}from 'react'
import './style.less'

export default function Banner() {
  const [motto] = useState({text:"学如逆水行舟，不进则退"})
     //动态加载字体
     useEffect(()=>{
      const {text} = motto
      let sum = 0
      let texts = document.getElementById("header-subtitle");
      setInterval(()=>{
          if(sum <= text.length){
              texts.innerText = text.substring(0, sum)
              sum++
          }else{
              sum = 0
          }
      },400)
  })
 
  //向下滚动的回调
  function yuan(){
    window.scrollTo({
      behavior: "smooth",
      top: document.documentElement.clientHeight
    });
  }

  return (
    <div className='home-banner'>
        {/* 信息 */}
        <div className='header-informosomes'>
            {/* 动态字体 */}
                <h1 className='header-h1'>Azreal的个人博客</h1>
                {/* 座右铭 */}
              <div className='header-motto'>
                <span id='header-subtitle'></span>
                <span className='header-fuhao'>|</span>
              </div>
        </div>

        {/* 向下滚动 */}
        <div className="header-down" onClick={yuan}>
            {/* 向下滚动图标 */}
            <i className="iconfont icon-falling"></i>
        </div>
    </div>
  )
}

