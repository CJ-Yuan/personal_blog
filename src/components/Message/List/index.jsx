import React,{useEffect} from 'react'
import imgs from '../../../assets/images/用户.png'
import './style.less'

export default function List(props) {
    //接收父组件传递的宽高和数据
    const {width,height,data} = props
    useEffect(()=>{
        setTimeout(()=>{
            barrage();
          },200)
    })
    function barrage(){
        data.map((e,index)=>{
            //随机获取弹幕出现的高度的Min，Max
            const barrageheight = Math.floor(Math.random() * (Math.floor(height-50) - Math.ceil(50))) + Math.ceil(50);
            const barragewidth = Math.floor(Math.random() * (Math.floor(width*2) - Math.ceil(width))) + Math.ceil(width);
            //用于储存随机数
            var randomheight = barrageheight;
            var randomwidth = barragewidth;
            const ID = document.getElementsByClassName('message-div')[index];
            //弹幕初始位置
            ID.style.cssText=`transform:translate(${randomwidth}px,${randomheight}px);`
            //开启定时器
            var item = setInterval(()=>{
                randomwidth--;
                //通过判断是否开始和结束
                if(randomwidth >= -200){
                    //开始时
                    ID.style.cssText+=`transform:translate(${randomwidth}px,${randomheight}px)`
                }else{
                    //结束时
                    ID.remove()
                    clearInterval(item)
                }
                
            },0)
            return ''
        })

        
    }
  return (
    data.map((text,index)=>{
        // style={{transform:`translate(${barrageheight}px)`}}
        return <div className='message-div' key={index} style={{transform:`translate(${width}px)`}} >
            <span className='message-span'>
                <img src={imgs} alt=" "/>
                <span>{text.users}:</span>
                <span>{text.message}</span>
            </span>
        </div>
    })
  )
}

