import { LOGIN_RES_ERR, LOGIN_RES_SUCC, SET_USER_LOADING } from "./actionType"

const initial_state={
    token:"",
    loading:false,
    err:false
}
const reducer=(state=initial_state,{payload,type})=>{
    switch (type) {
        case SET_USER_LOADING:{
            return {...state,loading:payload}
        }
        case LOGIN_RES_SUCC:{
            return {...state,loading:false,token:payload}
        }
        case LOGIN_RES_ERR:{
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