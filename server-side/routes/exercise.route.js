const express = require("express");
const exerciseRoute = express.Router();
const { Exercise } = require("../model/exercise.model");

exerciseRoute.get("/", async (req, res) => {
  try {
    const notes = await Exercise.find();
    res.status(200).send(notes);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

exerciseRoute.post("/add", async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.status(200).send({ msg: "A new exercise has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

exerciseRoute.patch("/:_id", async (req, res) => {
  const { _id } = req.params;
  const payload = req.body;
  try {
    await Exercise.findByIdAndUpdate({ _id: _id }, payload);
    res.status(200).send({ msg: "user is updated" });
  } catch (err) {
    res.status(500).send(err);
  }
});

exerciseRoute.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    await Exercise.findByIdAndDelete({ _id: _id });
    res.status(200).send({ msg: "user is delete" });
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = {
  exerciseRoute,
};
