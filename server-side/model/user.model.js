const mongoose=require("mongoose");

//user shcema
const userSchema=mongoose.Schema(
    {
        
          email: {
            type: String,
            required: true,
            unique: true
          },
          password: {
            type: String,
            required: true
          },
          
          sex: {
            type: String,
            required: true
          },
          dob: {
            type: Date,
            required: true
          },
          weight: {
            type: Number,
            required: true
          },
          height: {
            type: Number,
            required: true
          }  
    },
    {
        versionKey:false
    }
)

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel};