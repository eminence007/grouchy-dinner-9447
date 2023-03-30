const mongoose=require("mongoose");

//user shcema
const diarySchema=mongoose.Schema(
    {
      name:{
        type:String,
        required:true,
        
      }
    },
    {
        versionKey:false
    }
)

const DiaryModel=mongoose.model("user",diarySchema)

module.exports={UserModel};