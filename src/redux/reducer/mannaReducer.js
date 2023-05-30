import {createSlice} from "@reduxjs/toolkit"
let initialState={
  token:"",
  msgs:[],
  info:[],
  loading:true,
  user:[],
  show:true,
  result:[]
  
}

const msgSlice=createSlice({
  name:'msg',
  initialState,
  reducers:{
    getToken(state,action){
      state.token=action.payload.token
      state.info=action.payload.data
    },
    getMsgs(state,action){
      state.msgs=action.payload.history
      state.user=action.payload.user
    },
    postMsgs(state,action){
      state.msgs=action.payload.res
    },
    showList(state,action){
      state.show=action.payload.tf
    },
    removeC(state,action){
      state.result=action.payload.res
    }
    
    

  }
})

export const gptActions =msgSlice.actions
export default msgSlice.reducer