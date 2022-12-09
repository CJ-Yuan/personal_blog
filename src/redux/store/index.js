//引入 createStore ，专门用于创建 redux 中最核心的 store 对象
import { legacy_createStore as createStore } from 'redux'
//引入 composeWithDevTools 用于支持游览器 redux开发者工具
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from '../reducers'

const store = createStore(rootReducer,composeWithDevTools());

export default store