// 此组件是父组件点击选择图片后提供预览效果
import React,{useEffect,useRef,useState} from 'react'
import api from '../../../../api';
import {seekCookei} from '../../../../utils/operatecookie'
import './style.less'

export default function Amend(props) {
    const [result,setresult] = useState('');
    // img 的Ref
    const image = useRef();
    // 接收父组件传递过来的Input数据
    let localurl = props.localurl
    
    useEffect(()=>{
        // 取出File值
        let files = localurl.files[0]
        // 获取img的元素节点
        let img = image.current;
        img.file = files;
        //创建了FileReader来处理异步的图片加载并把他赋给img元素,MDN的案例
        let reader = new FileReader();
        reader.onload = ((aImg)=>{ return (e)=>{
            // 获取到base64,并交给result
            setresult(e.target.result)
            aImg.src = e.target.result;
        }; 
        })(img);
        reader.readAsDataURL(files);
    },[localurl])
    
    // 点击上传
    const yuan = ()=>{
        let token =  seekCookei('token')
        console.log(token)
        api.postuserportrait({
            token,
            base:result
        }).then((res)=>{
            if(res.data.status===200){
                alert('更换头像成功')
            }else{
                alert('未知原因失败')
            }
        })
    }

  return (
    <div className='amend-overlay'>
        <div className='amend-cropper-mark'>
            <a title='取消' href="./">X</a>
        </div>
        <div className='amend-cropper-container'>
            <div className='amend-cropper-image'>
                <img ref={image}  alt="" />
            </div>
            <div className='amend-cropper-footer'>
                <button>取消</button>
                <button onClick={yuan}>提交</button>
            </div>
        </div>
    </div>
  )
}
