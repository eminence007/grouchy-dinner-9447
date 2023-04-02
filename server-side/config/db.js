const mongoose = require("mongoose");
require("dotenv").config();
// console.log(process.env);
const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connection };
