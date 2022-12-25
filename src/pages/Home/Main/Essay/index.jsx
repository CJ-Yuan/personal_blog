//这是首页内容组件中的文章渲染组件
import React,{ useState } from 'react'
import {  Row, Col ,  } from '@douyinfe/semi-ui';
import './style.less'
export default function Essay(props) {
    const [widths,setwidths] = useState();
    //接收到数据
    const data = props.data;
    // 监听屏幕大小变化
    window.addEventListener('resize',screen)

    function screen(){
        // 获取当前屏幕宽度
        let dqwdith = document.documentElement.clientWidth;
        setwidths(dqwdith);
    }
  return (
    <div className='es'>
        {   
            // 渲染数据
            data.map((data,index)=>{
                const {channelName,title,time,img,link} = data
                if(widths > 768){
                    if(index%2 === 0){
                        return(
                        <Row key={index}  className='es-kuang'>
                        {/* 图片 */}
                        <Col span={24} md={11} className='es-img'>
                            <a href={link}>
                                <div className='es-img-bg' style={{width:'100%',height:'100%'}}>
                                    <div className='es-img-bg-src' style={{
                                        backgroundImage:`url(${img})`,
                                        backgroundPosition:'center center'
                                    }}>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        {/* 文本信息 */}
                        <Col span={24} md={13} className='es-text'>
                            <div className='es-text-title'>
                                <a href={link}>{title}</a>
                            </div>
                            <div className='es-text-info'>
                                <i className='iconfont icon-calendar'></i>
                                {time}
                                <span>|</span>
                                <a href='/'>
                                    <i className='iconfont icon-jiaobiao'></i>
                                {channelName}
                                </a>
                            </div>
                            <div className='es-text-content'>这是文本内容</div>
                        </Col>
                        </Row>
                        )
                    }else{
                        return(
                        <Row key={index}  className='es-kuang'>
                        {/* 文本信息 */}
                        <Col span={24} md={13} className='es-text'>
                            <div className='es-text-title'>
                                <a href={link}>{title}</a>
                            </div>
                            <div className='es-text-info'>
                                <i className='iconfont icon-calendar'></i>
                                {time}
                                <span>|</span>
                                <a href='/'>
                                    <i className='iconfont icon-jiaobiao'></i>
                                {channelName}
                                </a>
                            </div>
                            <div className='es-text-content'>这是文本内容</div>
                        </Col>
                        {/* 图片 */}
                        <Col span={24} md={11} className='es-img'>
                            <a href="/">
                                <div className='es-img-bg' style={{width:'100%',height:'100%'}}>
                                    <div className='es-img-bg-src' style={{
                                        backgroundImage:`url(${img})`,
                                        backgroundPosition:'center center'
                                    }}>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        </Row>
                        )
                    }
                }else{
                    return(
                        <Row key={index}  className='es-kuang'>
                        {/* 图片 */}
                        <Col span={24} md={11} className='es-img'>
                            <a href={link}>
                                <div className='es-img-bg' style={{width:'100%',height:'100%'}}>
                                    <div className='es-img-bg-src' style={{
                                        backgroundImage:`url(${img})`,
                                        backgroundPosition:'center center'
                                    }}>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        {/* 文本信息 */}
                        <Col span={24} md={13} className='es-text'>
                            <div className='es-text-title'>
                                <a href={link}>{title}</a>
                            </div>
                            <div className='es-text-info'>
                                <i className='iconfont icon-calendar'></i>
                                {time}
                                <span>|</span>
                                <a href='/'>
                                    <i className='iconfont icon-jiaobiao'></i>
                                {channelName}
                                </a>
                            </div>
                            <div className='es-text-content'>这是文本内容</div>
                        </Col>
                        </Row>
                        )
                }
            })
        }
    </div>
  )
}
