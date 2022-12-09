//这是首页内容组件中的文章渲染组件
import React from 'react'
import './style.less'

export default function Essay(props) {
    // 接收到数据
    const data = props.data;
  return (
    <div className='essay'>
        {
            // 渲染数据
            data.map((data,index)=>{
                const {channelName,title,time,img,link} = data
                if(index%2 === 0){
                    return(
                        <div className='text-link' key={index}>
                            {/* 图片 */}
                            <div className='text-link-img'>
                                <a href={link}>
                                    <div className='text-link-wai' style={{width:'100%',height:'100%'}}>
                                        <div className='text-img-kuan' style={{
                                            backgroundImage:`url(${img})`,
                                            backgroundPosition:'center center'
                                        }}>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 文本信息 */}
                            <div className='text-link-item'>
                                {/* 标题 */}
                                <div className='essay-title' style={{lineHeight:'1.4'}}>
                                    <a href={link}>{title}</a>
                                </div>
                                {/* 时间 标签 */}
                                <div className='essay-info'>
                                    <i className='iconfont icon-calendar'></i>
                                    {time}
                                    <span className='essay-info-span'>|</span>
                                    <a href={link} className='essay-source'>
                                        <i className='iconfont icon-jiaobiao'></i>
                                        {channelName}
                                    </a>
                                </div>
                                {/* 文本内容 */}
                                <div className='essay-content'>这个是文本内容</div>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div className='text-link' key={index}>
                            {/* 文本信息 */}
                            <div className='text-link-item'>
                                {/* 标题 */}
                                <div className='essay-title' style={{lineHeight:'1.4'}}>
                                    <a href={link}>{title}</a>
                                </div>
                                {/* 时间 标签 */}
                                <div className='essay-info'>
                                    <i className='iconfont icon-calendar'></i>
                                    {time}
                                    <span className='essay-info-span'>|</span>
                                    <a href={link} className='essay-source'>
                                        <i className='iconfont icon-jiaobiao'></i>
                                        {channelName}
                                    </a>
                                </div>
                                {/* 文本内容 */}
                                <div className='essay-content'>这个是文本内容</div>
                            </div>
                            {/* 图片 */}
                            <div className='text-link-img'>
                                <a href={link}>
                                    <div className='text-link-wai' style={{width:'100%',height:'100%'}}>
                                        <div className='text-img-kuan' style={{
                                            backgroundImage:`url(${img})`,
                                            backgroundPosition:'center center'
                                        }}>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }
            })
        }
    </div>
  )
}

