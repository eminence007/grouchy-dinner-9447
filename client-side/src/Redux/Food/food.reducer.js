import * as types from './food.actionType';



const initialState={
    data:[],
    loading:false,
    err:false
}
const reducer=(state=initialState,{payload,type})=>{
    switch (type) {
        case types.DIARY_DATA_LOADING:{
            return {...state,loading:payload}
        }
        case types.DIARY_DATA_SUCCESS:{
            return {...state,loading:false,data:payload}
        }
        case types.DIARY_DATA_ERR:{
            return {...state,loading:false,err:true}
        }
        case "reset":{
            return {
                token:"",
                loading:false,
                err:false
            }
        }
    
        default:{
            return state
        }
    }
}
export { reducer}