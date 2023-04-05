const express = require("express");
const { exerciseRoute } = require('./routes/exercise.route');
const {connection}=require("./config/db")
const {userRoute}=require("./routes/user.routes")
const {foodRoute}=require("./routes/food.routes")
const {auth}=require("./middleware/auth.middleware")
const {diaryRoute} = require("./routes/diary.route")
const cors=require("cors")
const app=express();
require("dotenv").config()
app.use(cors())
app.use(express.json());

app.use("/user",userRoute);


app.use('/exercise', exerciseRoute); 
// app.use(auth)
app.use("/food",foodRoute)
app.use("/diary",diaryRoute)

app.listen(process.env.PORT, async(req,res)=>{
    try{
        await connection
        console.log(`Mongo is connected on port ${process.env.PORT}`);

    }catch(err){
        console.log(`Mongo is not connected so check you console`);
    }

})

