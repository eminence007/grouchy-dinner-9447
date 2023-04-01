const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema({
  level: { type: String, required: true },
  calories: { type: Number, required: true },
});

const TypeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  levels: [LevelSchema],
});

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  types: [TypeSchema],
});

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  activities: [ActivitySchema],
  userId: String,
  date: {
    type: Date,
    default: function() {
      return new Date();
    },
    get: function(val) {
      return `${val.getDate()}/${val.getMonth() + 1}/${val.getFullYear()}`;
    }
  }
});

const DiaryExercise = mongoose.model("DiaryExercise", ExerciseSchema);

module.exports = {
    DiaryExercise
};
