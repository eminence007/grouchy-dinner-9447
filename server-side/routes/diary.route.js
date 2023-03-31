const express=require("express")
const diaryRoute = express.Router();
const {Exercise}=require("../model/diaryExcercise.model")
const {Food} = require("../model/diaryfood.model")

diaryRoute.get("/exercise",async(req,res)=>{
    try{
            const notes=await Exercise.find()
            res.status(200).send(notes)
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

diaryRoute.get("/food",async(req,res)=>{
    try{
            const notes=await Food.find()
            res.status(200).send(notes)
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

diaryRoute.post("/addExercise", async (req, res) => {
    try {
      const exercise = new Exercise(req.body);
      await exercise.save();
      res.status(200).send({ "msg": "A new exercise has been added" });
    } catch (err) {
      res.status(400).send({ "msg": err.message });
    }
  });

  diaryRoute.post("/addfood", async (req, res) => {
    try {
      const exercise = new Food(req.body);
      await exercise.save();
      res.status(200).send({ "msg": "A new exercise has been added" });
    } catch (err) {
      res.status(400).send({ "msg": err.message });
    }
  });

  diaryRoute.patch("/food/:_id", async(req,res)=>{
    const {_id} = req.params
    const payload = req.body;
    try{
      await Food.findByIdAndUpdate({_id:_id},payload)
    res.status(200).send({"msg":"user is updated"})
    }catch(err){
      res.status(500).send(err)
    }
})

diaryRoute.patch("/exercise/:_id", async(req,res)=>{
    const {_id} = req.params
    const payload = req.body;
    try{
      await Exercise.findByIdAndUpdate({_id:_id},payload)
    res.status(200).send({"msg":"user is updated"})
    }catch(err){
      res.status(500).send(err)
    }
})

diaryRoute.delete("/food/:_id",async(req,res)=>{
    const {_id}= req.params
    try {
        await Exercise.findByIdAndDelete({_id:_id})
        res.status(200).send({"msg":"user is delete"})
    } catch (error) {
        res.status(500).send(err)
    }
})

diaryRoute.delete("/excercise/:_id",async(req,res)=>{
    const {_id}= req.params
    try {
        await Food.findByIdAndDelete({_id:_id})
        res.status(200).send({"msg":"user is delete"})
    } catch (error) {
        res.status(500).send(err)
    }
})

module.exports={
    diaryRoute
}