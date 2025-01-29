const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://swapgmre:FqyVzpYvBWPS407D@techtinderproject.4lh4d.mongodb.net/tinderDB")
};

module.exports = connectDB;


