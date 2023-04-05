const mongoose = require("mongoose");


const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  energy : { type: Number, required: true },
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
