// MajorProjectOne
// KwdyeEA9mRBuyYt9
const mongoose = require("mongoose");
require("dotenv").config();

const mongoosUrl = process.env.MONGODB;

mongoose
  .connect(mongoosUrl)
  .then(() => console.log("Connected to DataBase."))
  .catch((error) => console.log(error));
