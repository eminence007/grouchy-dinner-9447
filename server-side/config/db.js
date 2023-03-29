const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://shashank:shashank@cluster0.pueno7h.mongodb.net/fitfuel-DB?retryWrites=true&w=majority"
);





module.exports = { connection };


