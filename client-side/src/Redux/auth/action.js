import { LOGIN_RES_ERR, LOGIN_RES_SUCC, SET_USER_LOADING } from "./actionType";
import axios from "axios";
const url = "http://localhost:8080";

const Log_In_Succ = (payload) => {
  return {
    type: LOGIN_RES_SUCC,
    payload,
  };
};
const Log_In_Err = () => {
  return {
    type: LOGIN_RES_ERR,
  };
};
const Set_User_Loading = (payload) => {
  return {
    type: SET_USER_LOADING,
    payload,
  };
};

export const login =
  ({ name, password }) =>
  (dispatch) => {
    dispatch(Set_User_Loading(true));
    axios
      .post(`${url}/user/login`, {
        name: name,
        password: password,
      })
      .then((res) => {
        console.log(res);
        dispatch(Log_In_Succ(res.data.token));
      })
      .catch((err) => {
        dispatch(Log_In_Err);
      });
  };
export const rgeister =
  ({ email, password, sex, dob, height, weight }) =>
  (dispatch) => {
    console.log("clicked");
    dispatch(Set_User_Loading(true));
    let a = axios
      .post(`${url}/user/register`, {
        email,
        password,
        sex,
        dob,
        height,
        weight,
      })
      .then((res) => {
        console.log(res);
        dispatch(Set_User_Loading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
