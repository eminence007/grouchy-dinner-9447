import { LOGIN_RES_ERR, LOGIN_RES_SUCC, SET_USER_LOADING } from "./actionType";
import axios from "axios";
const url = "http://localhost:4500";

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
  ({ email, password }) =>
  (dispatch) => {
    console.log("cliccke2");
    dispatch(Set_User_Loading(true));
    return axios
      .post(`${url}/user/signIn`, {
        email: email,
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
      .post(`${url}/user/signup`, {
        email,
        password,
        sex,
        dob,
        height,
        weight,
        conferm_password: password,
      })
      .then((res) => {
        console.log(res);
        dispatch(Set_User_Loading(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };
