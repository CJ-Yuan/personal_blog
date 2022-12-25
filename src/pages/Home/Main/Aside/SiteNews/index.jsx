//这是网站资讯组件
import React,{useEffect,useState} from 'react'
import api from '../../../../../api/'
import './style.less'

export default function SiteNews() {
    const [item,setitem] = useState('');
    const [visit,setvisit] = useState(0);
    useEffect(()=>{
        //访客量
        api.getvisit().then((res)=>{ 
        let data = res.data.data[0]
        // 将返回的访问量储存到状态中
        setvisit(data)
        //开启定时器，计算网站运行时间
        setInterval(runtime, 1000);
        })
        //运行时间
        function runtime(){
            // 初始时间，月/日/年 时:分:秒
            var X = new Date("12/5/2022 7:00:00");
            var Y = new Date();
            var T = (Y.getTime()-X.getTime());
            var M = 24*60*60*1000;
            var a = T/M;
            var A = Math.floor(a);
            var b = (a-A)*24;
            var B = Math.floor(b);
            var c = (b-B)*60;
            var C = Math.floor((b-B)*60);
            var D = Math.floor((c-C)*60);
            //信息写入到DIV中
            let item = A+"天"+B+"小时"+C+"分"+D+"秒"
            //将计算好的时间存储到状态中
            setitem(item)
        }
        },[])

  return (
    <div className='SiteNews-card'>
        <div style={{fontSize:'20px'}}>
            <i className='iconfont icon-phone-fill' style={{fontSize:'20px'}}></i>
            网站资讯
        </div>
        <div style={{fontSize:'0.875rem'}}>
            {/* 网站运行时间 */}
            <div style={{textAlign:'center'}}>
                运行时间<p></p>
                {/* <span>{runtimes.time.time}</span> */}
                <span>{item}</span>
            </div>
            {/* 网站访问人数 */}
            <div style={{textAlign:'center'}}>
                总访问量<p></p>
                <span>{visit}</span>
            </div>
        </div>
    </div>
  )
}
