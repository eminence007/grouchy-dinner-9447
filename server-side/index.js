const express = require("express");

const {connection}=require("./config/db")
const app=express();
const { exerciseRoute } = require('./routes/exercise.route');
app.use(express.json());




app.use('/exercise', exerciseRoute);


app.listen(4500, async(req,res)=>{
    try{
        await connection
        console.log("Mongo is connected");

    }catch(err){
        console.log(`Mongo is not connected so check you console`);
    }
})

