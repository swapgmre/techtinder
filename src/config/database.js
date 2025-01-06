const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://swapgmre:K73u0cmmv4WFdEfd@techtinderproject.4lh4d.mongodb.net/tinderDB")
};

module.exports = connectDB;
