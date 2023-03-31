import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  function signInHandler() {
    axios.post("http://loaclhost:8080/user/login", { email, password });
  }
  return (
    <div className="m-auto w-[50%]">
      <div className="container mx-auto px-20 p-3 rounded-lg bg-white shadow-md ">
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
              className="test-center border py-2 bg-green-800 rounded-xl w-52"
            >
              LOGIN
            </button>
            <p className="mt-4 text-green-800 underline">
              <a href="#">Forget your password?</a>
            </p>
            <p className="mt-5 text-gray-700 font-light">Not a member</p>
            <p className="underline text-green-700 font-light">
              <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
