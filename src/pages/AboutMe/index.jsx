//这是关于组件
import React,{useEffect} from 'react'
import './style.less'

export default function AboutMe() {
  useEffect(()=>{
    document.title = '关于我'
  })
  return (
    <main className='aboutme' style={{padding:'60px 0px 136px'}}>
      <div className='aboutme-wai'>
        <div>
          {/* 头部 */}
          <div className='aboutme-banner'>
            <h1>关于我</h1>
          </div>
          {/* 内容 */}
          <div className='aboutme-theme'>
            <div className='aboutme-wrapper'>
              <div className='aboutme-imge'>
                <img src={require('../../assets/images/头像.jpg')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
