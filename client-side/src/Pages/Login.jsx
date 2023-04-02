import { CircularProgress } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/auth/action";
import AuthNav from "../Components/AuthNav/AuthNav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  let { token, loading } = useSelector((state) => {
    return state.authReducer;
  });
  const dispatch = useDispatch();
  function signInHandler() {
    console.log("cliccke");
    dispatch(login({ email, password })).then((res) => {
      navigate("/dashboard");
    });
    // axios.post("http://loaclhost:8080/user/login", { email, password });
  }
  return (
    <div>
      <AuthNav />
      <div className="m-auto w-[50%]">
        <div className=" mx-auto px-20 p-3 rounded-lg bg-white shadow-md ">
          <p className="font-extrabold text-2xl text-center">Welcome Back</p>
          <div className="">
            <div className="mb-2">
              <p className="mb-1">Email</p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="border border-black rounded-md w-full p-2"
                placeholder="Email"
              />
            </div>

            <div className="mb-2">
              <p className="mb-1">Password</p>
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="text"
                className="border border-black rounded-md w-full p-2"
                placeholder="Email"
              />
            </div>

            <div className=" text-center mt-16">
              <button
                onClick={signInHandler}
                className="test-center border py-2 bg-red-400 rounded-xl w-52"
              >
                {loading ? (
                  <CircularProgress isIndeterminate color="green.300" />
                ) : (
                  "LOGIN"
                )}

                {/* <CircularProgress isIndeterminate color='green.300' /> */}
              </button>
              <p className="mt-4 text-red-500 underline">
                <a href="#">Forget your password?</a>
              </p>
              <p className="mt-5 text-gray-700 font-light">Not a member</p>
              <p className="underline text-red-400 font-light">
                <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
