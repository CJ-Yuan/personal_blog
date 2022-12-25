//这是首页内容组件
import React,{useEffect} from 'react'
import { Col, Row } from '@douyinfe/semi-ui';
import api from '../../../api'
import './style.less'
//useSelector 用于读取数据 useDispatch 用于获取Dispatch对象
import {useSelector,useDispatch } from 'react-redux'
import {getarticle} from "../../../redux/actions/article" 

import Aside from './Aside'
import Essay from './Essay'
import Loading from '../../../components/Loading'

export default function Main() {
    const article = useSelector(data => data.article)
    const dispatch = useDispatch();
    
    //请求文章数据，并储存在redux
    useEffect(()=>{
        api.article().then((res)=>{
            dispatch(getarticle(res.data))
        })
    },[dispatch])

return (
    <Row className='main-content'>
        <Col span={0} md={6}>
        <Aside />
        </Col>
        {
            // 进行判断是否获得数据
            article.length > 0?  <Col span={24} md={18}><Essay data={article}/></Col> : <Loading />
        }
    </Row>
  )
}
