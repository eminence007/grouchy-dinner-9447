const mongoose = require("mongoose");

const MacronutrientSchema = new mongoose.Schema({
  protein: [
    {
      name: { type: String },
      weight: { type: Number },
      availableIn100g: { type: Number },
    },
  ],
  Fat: [
    {
      name: { type: String },
      weight: { type: Number },
      availableIn100g: { type: Number },
    },
  ],
  Carbohydrates: [
    {
      name: { type: String },
      weight: { type: Number },
      availableIn100g: { type: Number },
    },
  ],
});

const NutrientSchema = new mongoose.Schema({
  name: { type: String },
  weight: { type: Number },
  availableIn100g: { type: Number },
});

const FoodSchema = new mongoose.Schema({
  foodName: { type: String },
  Macronutrient: { type: MacronutrientSchema },
  HighlightedNutrients: [{ type: NutrientSchema }],
  Vitamins: [{ type: NutrientSchema }],
  Minerals: [{ type: NutrientSchema }],
});

const FoodDataSchema = new mongoose.Schema(
  {
    foodData: [{ type: FoodSchema }],
  },
  {
    versionKey: false,
  }
);

const FoodModel = mongoose.model("FoodData", FoodDataSchema);

module.exports = { FoodModel };
