import { gptActions } from "../reducer/mannaReducer";
import axios from "axios";
const url = `https://mannadb.onrender.com`;

function login(data) {
  return async (dispatch, getState) => {
    try {
      const res = await axios.post(`${url}/auth/token`, data);
      let token = res.data.token;
      dispatch(gptActions.getToken({ token, data }));
      return token

    
    } catch (err) {
      console.error(err);
      dispatch(gptActions.errMsg({err}))
    }
  };
}

function register(data) {
  return async (dispatch, getState) => {
    try {
      const res = await axios.post(`${url}/auth/register`, data);
      let token = res.data.token;

      dispatch(gptActions.getToken({ token }));
    } catch (err) {
      console.error(err);
      dispatch(gptActions.errMsg({err}))
    }
  };
}

function getMsg(data) {
  return async (dispatch, getState) => {
    try {
      const getId = await axios.get(`${url}/by/${data}`);

      const id = getId.data.result.id;
      const user = getId.data.result;

      const res = await axios.get(`${url}/history/msg/${id}`);

      let history = res.data.history;

      dispatch(gptActions.getMsgs({ history, user }));
    } catch (err) {
      console.error(err);
    }
  };
}

function postMsg(user_id, msg) {
  return async (dispatch, getState) => {
    const obj = {
      user_id: user_id,
      msg: msg,
    };
   

    try {
      
      const res = await axios.post(`${url}/history`, obj);
      dispatch(gptActions.postMsgs(res.data.res));
    } catch (err) {
      console.error(err);
    }
  };
}

function removeItem(id){
  return async (dispatch,getState)=>{
    try{
      const res=await axios.delete(`${url}/history/${id}`)
     
      dispatch(gptActions.removeC(res.data))
     
       
    }catch(err){
      console.error(err)
      dispatch(gptActions.errMsg({err}))
    }
  


  }
}





export const gptAction = { login, register, getMsg, postMsg,removeItem };
