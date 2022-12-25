// 这是修改头像组件
import React,{useRef,useState,useEffect} from 'react'
import Amend from './Amend';
import './style.less'
export default function AmendPortrait(props) {
    const [localUrl,setlocalUrl] = useState(null)
    const [images,setimages] = useState();
    const file = useRef();

    useEffect(()=>{
        setimages(props.image)
    },[props.image])
    // button的点击回调函数,触发input框的点击事件
    const yuan = ()=>{file.current.click()}

    // 监听input框的回调函数
    const amend = (e)=>{
        // 取出选择文件的File值
        let files = e.target;
        let max = 30000;
        console.log(e.target.files[0].size)
        if(e.target.files[0].size > max){
            alert('文件太大了！请选择30kb以内')
        }else{
            setlocalUrl(files)
        }
    }

  return (
    <div className='amend-info-tou'>
        <button className='amend-button-img' onClick={yuan}>
            <div className='amend-imge'>
            <img src={images} alt="" />
            </div>
        </button>
        <div className='amend-cropper'>
            {/* 选择图片后预览 */}
            { localUrl === null ? '':<Amend localurl={localUrl} />}
            {/* input用于选择文件 */}
            <input 
            className='' 
            onChange={amend} 
            ref={file} 
            type="file" 
            accept="image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
            style={{display:'none'}}
            />
        </div>
    </div>
  )
}
