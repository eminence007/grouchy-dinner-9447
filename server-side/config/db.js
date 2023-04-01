const mongoose = require("mongoose");
const connection = mongoose.connect(process.env.MONGO_URL);
require("dotenv").config();


module.exports = { connection };


