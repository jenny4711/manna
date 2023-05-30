import { configureStore } from '@reduxjs/toolkit'
import mannaReducer from './reducer/mannaReducer';


const store = configureStore({
reducer:{
gpt:mannaReducer,
 

}
})

export default store;