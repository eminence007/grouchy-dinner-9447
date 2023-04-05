const mongoose = require('mongoose');

// Define your schema
const foodSchema =  mongoose.Schema({
  foodName: {
    type: String,
    required: true
  },
  Macronutrient: {
    protein: [{
      name: String,
      weight: Number,
      availableIn100g: Number
    }],
    Fat: [{
      name: String,
      weight: Number,
      availableIn100g: Number
    }],
    Carbohydrates: [{
      name: String,
      weight: Number,
      availableIn100g: Number
    }],
  },
  HighlightedNutrients: [{
    name: String,
    weight: Number,
    availableIn100g: Number
  }],
  Vitamins: [{
    name: String,
    weight: Number,
    availableIn100g: Number
  }],
  Minerals: [{
    name: String,
    weight: Number,
    availableIn100g: Number
  }]
});

// Create a model based on the schema
const FoodModel = mongoose.model('Food', foodSchema);

// Export the model
module.exports = FoodModel;
