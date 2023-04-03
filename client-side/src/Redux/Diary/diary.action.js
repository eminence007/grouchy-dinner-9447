import * as types from './diary.actionType'
import axios from "axios"

export const getDiaryData=()=>(dispatch)=>{
    dispatch({type:types.DIARY_DATA_LOADING});
    try{
        axios.get(`http://localhost:4500/food`).then((res)=>{
            dispatch({type:types.DIARY_DATA_SUCCESS,payload:res.data.foods})
        }) 
    }catch(err){
        dispatch({type:types.DIARY_DATA_ERR})
        console.log("err",err);
    }
}


