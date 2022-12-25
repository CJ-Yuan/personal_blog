// 配置路由守卫
// useLocation 用于获取当前路径对象，useNavigate用于跳转路由
import{ useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { useEffect } from 'react';


const BeforeEnter=({routers})=>{

    const location = useLocation();
    const navigate = useNavigate();
    const router = useRoutes(routers);

    // 在路由数组中找当前页面路径的对应路由项
    const fineRouter = (routers,path) => {
        for(let val of routers){      
            //判断是否存在二级路由
            if(!val.children){
                if(val.path === path) return val
            }else{
                for(let vals of val.children){
                    if(vals.path === path) return val
                }
            }
            
        }
        return null
    }
    //路由判断
    const judgeRouter = (location,navigate)=>{
        const {pathname} = location;
        // 路由数组匹配当前路由路径
        const findRoute = fineRouter(routers,pathname);
        // 没有找到，跳转到404页面
        if(!findRoute){
            // navigate('/404');
            return
        }
        // 路由项如果有权限需求，进行逻辑验证
        if(findRoute.auth) {
            //用户未登陆，跳转到登陆页面
                // 读取localStorage是否存在
            if(!localStorage.getItem("user")) navigate("/login");
        }
    }
    //基于useEffect监听页面路由改变。然后组件重新加载，又重新校验权限。
    useEffect(()=>{

        judgeRouter(location,navigate);
        
    },[navigate,location])
    return router
}


export default  BeforeEnter