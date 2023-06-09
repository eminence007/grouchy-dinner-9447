import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./auth/reducer";

import { reducer as foodReducer } from "./Food/food.reducer";
import exercisesReducer from "./exercise/exercise.reducer"

import thunk from "redux-thunk";

const allreducer = combineReducers({
  authReducer,
  foodReducer,
  exercisesReducer
});






const store = legacy_createStore(allreducer, applyMiddleware(thunk));

export default store;
