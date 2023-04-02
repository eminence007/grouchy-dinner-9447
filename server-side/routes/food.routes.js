const express = require("express");
const foodRoute = express.Router();
const { FoodModel } = require("../model/food.model");

foodRoute.get("/", async (req, res) => { //changed from "/get" --> "/" by Vibhor
  try {
    const foods = await FoodModel.find();
    res.status(200).send({ foods });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

foodRoute.post("/add", async (req, res) => {
  try {
    let food = new FoodModel(req.body);
    await food.save();
    res.status(200).send({ msg: "Data has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = {
  foodRoute,
};
