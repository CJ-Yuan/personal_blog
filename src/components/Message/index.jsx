//这是留言弹幕组件
import React,{useState,useEffect,useRef} from 'react'
import List from './List';
import api from '../../api';
import Loading from '../Loading';
import './style.less'



function Message() {
  //用于储存屏幕宽度
  const [widths,setwidths] = useState(0);
  //用于储存弹幕可视高度
  const [heights,setheight] = useState(0)
  //用于储存留言板数据
  const [data,setdata] = useState([])
  const inits = useRef();

  useEffect(()=>{
    //获取宽高并储存状态
  setwidths(inits.current.clientWidth);
  setheight(inits.current.clientHeight);
  //请求留言数据并储存到状态中
  api.guestbook().then((res)=>{
    if(res.data.status === 200){
      setdata(res.data.data)
    }else{
      alert('数据获取失败,请刷新重试！')
    }
  })
},[])

  return (
    <div className='message' ref={inits} >
      {/* 将获取的宽高传递给List */}
      {data.length <= 0 ? <Loading/> : <List width={widths} height={heights} data={data}/>}
    </div>
  )
}


export default Message