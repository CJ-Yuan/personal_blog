//配置路由表
import { Navigate } from "react-router-dom";
import Home from '../pages/Home'
import Guestbook from "../pages/Guestbook";
import AboutMe from "../pages/AboutMe";
import Users from "../pages/Users";
import PersonalCenter from "../pages/PersonalCenter";

const luyou = [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/guestbook',
        element:<Guestbook/>
    },
    {
        path:'/aboutme',
        element:<AboutMe />
    },
    {
        path:'/users/*',
        element:<Users />
    },
    {
        path:'/personalcenter',
        element:<PersonalCenter />
    },
    {
        path:'/',
        element:<Navigate to="/home"/>
    }
]

export default luyou