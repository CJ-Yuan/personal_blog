import React from 'react'
import { useSelector } from 'react-redux'
import './style.less'

function Message() {
    //读取存储的在redux中的article
    const article = useSelector(data => data.article)
  return (
    <div className='message-card card-widget'>{/* 信息卡片 */}
        {/* 网站个人信息 */}
        <div className='message-personal'>
            {/* 头像 */}
            <div className='message-head'> 
                <img className='message-img' src={require('../../../../../assets/images/头像.jpg')} alt='头像'/>
            </div>
            {/* 名字 */}
            <div className='message-name'>Azreal</div>
            {/* 个人简介 */}
            <div className='message-introduction'>我走得很慢，但我从不后退.</div>
        </div>
        {/* 数据 */}
        <div className='message-data'>
            {/* 文章 */}
            <div className='message-data-classify'>
                <a href="javascript">
                    <div className='message-headline'>文章</div>
                    <div className='message-length-num'>{article.length}</div>
                </a>
            </div>
                {/* 标签 */}
            <div className='message-data-classify'>
                <a href="javascript">
                    <div className='message-headline'>标签</div>
                    <div className='message-length-num'>0</div>
                </a>
            </div>
            {/* 分类 */}
            <div className='message-data-classify'>
                <a href="javascript">
                    <div className='message-headline'>分类</div>
                    <div className='message-length-num'>0</div>
                </a>
            </div>
        </div>
        {/* GitHub主页 */}
        <a className='message-github' href="https://github.com/CJ-Yuan">{/* GitHub主页 */}
            <i className='iconfont icon-github-fill'></i>
            GitHub主页
        </a>
        {/* 联系方式 */}
        <div className='message-contact'>
            <a href="/" className='iconfont icon-QQ-circle-fill' > </a>
            <a href="/" className='iconfont icon-weixin'> </a>
            <a href="/" className='iconfont icon-github-fill'> </a>
        </div>
    </div>
  )
}


export default Message