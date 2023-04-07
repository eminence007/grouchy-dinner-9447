import * as types from './exercise.actionType'
import axios from "axios"

export const fetchExercisesRequest = () => ({
    type: types.FETCH_EXERCISES_REQUEST
  });
  
  export const fetchExercisesSuccess = exercises => ({
    type: types.FETCH_EXERCISES_SUCCESS,
    payload: exercises
  });
  
  export const fetchExercisesFailure = error => ({
    type: types.FETCH_EXERCISES_FAILURE,
    payload: error
  });
  
  // Async Action Creator
  export const fetchExercises = () => {
    return dispatch => {
      dispatch(fetchExercisesRequest());
      axios.get('http://localhost:4500/exercise')
        .then(response => {
          const exercises = response.data;
          dispatch(fetchExercisesSuccess(exercises));
          console.log(exercises)
        })
        .catch(error => {
          const errorMessage = error.message;
          dispatch(fetchExercisesFailure(errorMessage));
        });
    };
  };
