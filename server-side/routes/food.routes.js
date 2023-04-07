const express = require("express");
const foodRoute = express.Router();
const { FoodModel } = require("../model/food.model");

// foodRoute.get("/", async (req, res) => {
//   try {
//     let query = {};
//     if (req.query.search) {
//       const searchQuery = req.query.search;
//       query = { "foodData.foodName": { $regex: searchQuery || "", $options: "i" } };
//     }
//     const food = await FoodModel.find(query);
//     res.status(200).send(food);
//   } catch (err) {
//     res.status(400).send({ msg: err.message });
//   }
// });

foodRoute.post("/add",async(req,res)=>{
    try{
            let food= new FoodModel(req.body);
            await food.save();
            res.status(200).send({"msg":"Data has been added"})
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

foodRoute.get("/", async (req, res) => { //changed from "/get" --> "/" by Vibhor
  try {
    const foods = await FoodModel.find();
    res.status(200).send({ foods });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

foodRoute.delete("/delete/:id", async (req, res) => { 
  const { id} = req.params;
  
  try {
     await FoodModel.findByIdAndDelete({ _id:id });
    res.status(200).send({"msg":"Food has been deleted"})
    
  } catch (err) {
    res.status(400).send({ err: err.message }); 
  }
});


module.exports = {
  foodRoute,
};


