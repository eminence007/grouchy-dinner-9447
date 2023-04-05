const express = require("express");
const diaryRoute = express.Router();
const {DiaryExercise}=require("../model/diaryExcercise.model")
const {DiaryFood} = require("../model/diaryfood.model")

diaryRoute.get("/exercise",async(req,res)=>{
    try{
      console.log("hey diary route")
            const notes=await DiaryExercise.find()
            res.status(200).send(notes)
            console.log(notes)
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

diaryRoute.get("/food",async(req,res)=>{
    try{
            const notes=await DiaryFood.find()
            res.status(200).send(notes)
            console.log(notes)
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

diaryRoute.post("/addExercise", async (req, res) => {
    try {
      const exercise = new DiaryExercise(req.body);
      await exercise.save();
      res.status(200).send({ "msg": "A new exercise has been added" });
    } catch (err) {
      res.status(400).send({ "msg": err.message });
    }
  });

  diaryRoute.post("/addfood", async (req, res) => {
    try {
      const exercise = new DiaryFood(req.body);
      await exercise.save();
      res.status(200).send({ "msg": "A new Food has been added" });
    } catch (err) {
      res.status(400).send({ "msg": err.message });
    }
  });

  diaryRoute.patch("/food/:_id", async(req,res)=>{
    const {_id} = req.params
    const payload = req.body;
    try{
      await DiaryFood.findByIdAndUpdate({_id:_id},payload)
    res.status(200).send({"msg":"user is updated"})
    }catch(err){
      res.status(500).send(err)
    }
})

diaryRoute.patch("/exercise/:_id", async(req,res)=>{
    const {_id} = req.params
    const payload = req.body;
    try{
      await DiaryExercise.findByIdAndUpdate({_id:_id},payload)
    res.status(200).send({"msg":"user is updated"})
    }catch(err){
      res.status(500).send(err)
    }
})

diaryRoute.delete("/food/:_id",async(req,res)=>{
    const {_id}= req.params
    try {
        await DiaryExercise.findByIdAndDelete({_id:_id})
        res.status(200).send({"msg":"user is delete"})
    } catch (error) {
        res.status(500).send(err)
    }
})

diaryRoute.delete("/excercise/:_id",async(req,res)=>{
    const {_id}= req.params
    try {
        await DiaryFood.findByIdAndDelete({_id:_id})
        res.status(200).send({"msg":"user is delete"})
    } catch (error) {
        res.status(500).send(err)
    }
})

module.exports = {
  diaryRoute,
};


