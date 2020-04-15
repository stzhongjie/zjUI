import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rooterReducer from './reducers'//reducer之中是通过传递过来的事件名称操作事件操作的文件
export default createStore(
  rooterReducer,
  applyMiddleware(thunk)
)