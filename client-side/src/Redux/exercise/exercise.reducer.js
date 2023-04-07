import * as types from './exercise.actionType';


const initialState = {
    exercises: {
      exerciseData: [],
      loading: false,
      error: null
    }
  };
  
  function exercisesReducer(state = initialState, action) {
    switch (action.type) {
      case types.FETCH_EXERCISES_REQUEST:
        return {
          ...state,
          exercises: {
            ...state.exercises,
            loading: true
          }
        };
      case types.FETCH_EXERCISES_SUCCESS:
        return {
          ...state,
          exercises: {
            ...state.exercises,
            exerciseData: action.payload,
            loading: false,
            error: null
          }
        };
      case types.FETCH_EXERCISES_FAILURE:
        return {
          ...state,
          exercises: {
            ...state.exercises,
            loading: false,
            error: action.payload
          }
        };
      default:
        return state;
    }
  }
  
  
  export default exercisesReducer;