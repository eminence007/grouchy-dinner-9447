const express = require("express");
const { exerciseRoute } = require('./routes/exercise.route');
const {connection}=require("./config/db")
const {userRoute}=require("./routes/user.routes")
const {foodRoute}=require("./routes/food.routes")
const {auth}=require("./middleware/auth.middleware")
const app=express();
app.use(express.json());

app.use("/user",userRoute);


app.use('/exercise', exerciseRoute); 
// app.use(auth)
app.use("/food",foodRoute)


app.listen(4500, async(req,res)=>{
    try{
        await connection
        console.log("Mongo is connected");

    }catch(err){
        console.log(`Mongo is not connected so check you console`);
    }

})

