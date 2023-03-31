import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as authReducer} from "./auth/reducer";

import thunk from "redux-thunk";

const allreducer=combineReducers({authReducer})

const store=legacy_createStore(allreducer,applyMiddleware(thunk))

export default store;