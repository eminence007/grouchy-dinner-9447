const express = require("express");
const userRoute = express.Router();
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

userRoute.post("/signup", async (req, res) => {
  const { email, password, conferm_password, sex, dob, weight, height } =
    req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(400).send({ msg: "User already exist" });
    } else if (password !== conferm_password) {
      res.status(400).send({ msg: "Make sure passwords entered are the same" });
    } else {
      bcrypt.hash(password, 3, async (err, hash) => {
        const user = new UserModel({
          email,
          password: hash,
          sex,
          dob,
          weight,
          height,
        });
        await user.save();
        res.send("User has been register successfully");
      });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRoute.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "Login Successful",
            token: jwt.sign({ userId: user._id }, process.env.SECRET_KEY),
          });
        } else {
          res.status(400).send({ msg: "Wrong Crendential" });
        }
      });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = { userRoute };
