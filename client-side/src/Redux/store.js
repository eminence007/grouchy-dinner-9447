import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./auth/reducer";

import { reducer as diaryReducer } from "./Diary/diary.reducer";

import thunk from "redux-thunk";

const allreducer = combineReducers({
  authReducer,
  diaryReducer,
});






const store = legacy_createStore(allreducer, applyMiddleware(thunk));

export default store;
