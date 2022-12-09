//这是留言板组件
import React,{useRef,useEffect} from 'react'
import './style.less'
import Message from '../../components/Message'
import api from '../../api'

export default function Guestbook() {
  const init = useRef();
  useEffect(()=>{
    document.title = '留言板'
  })
  //点击发送时的回调函数
  function senddata(){
    //接收input框的值,并进行限制
    let value = init.current.value.replace(/[^\u4e00-\u9fa5]/g,'');
    //对数据进行判断
    if(value.length>10){
      alert('请输入1~10个汉字');
    }else{
      switch (value){
        case '':
          alert('留言不能为空！(只能输入汉字)');
          break;
        default:
          //发送数据
          api.sendguestbook({
            id:'测试',
            users:'游客',
            message:value
          }).then((res)=>{
            if(res.data.status === 200){
              alert('留言成功');
              //强制页面刷新
              window.location.reload(); 
            }else{
              alert(res.data.message+'请重新尝试！');
            }
          })
      }
    }
  }
  return (
    <main className='guestbook' style={{padding:'60px 0px 0px'}}>
        <div>
          {/* 留言框 */}
          <div className='guestbook-div'>
            <h1>留言板</h1>
            <div className='guestbook-message' >
                <input type="text" placeholder='写点什么吧!(必须输入的是汉字)' ref={init}/>
                <button onClick={senddata}>发送</button>
            </div>
        </div>
          {/* 弹幕组件 */}
        <Message />
        </div>
    </main>
  )
}
