//这是首页组件
import React,{useEffect} from 'react'
import Banner from './Banner'
import Main from './Main'

import './index.less'

export default function Home() {
  useEffect(()=>{
    document.title = 'Azreal的个人博客'
  })
  return (
    <main className='home' style={{padding:'60px 0px 136px'}}>
        <div className='home-wai'>
          <div>
            <Banner />
            <Main />
          </div>
        </div>
    </main>
  )
}
