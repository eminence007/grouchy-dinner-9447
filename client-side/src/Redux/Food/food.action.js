import * as types from './food.actionType'
import axios from "axios"

export const getDiaryData=()=>(dispatch)=>{
    dispatch({type:types.DIARY_DATA_LOADING});
    try{
        axios.get(`http://localhost:4600/food`).then((res)=>{
            dispatch({type:types.DIARY_DATA_SUCCESS,payload:res.data.foods})
        }) 
    }catch(err){
        dispatch({type:types.DIARY_DATA_ERR})
        console.log("err",err);
    }
}

