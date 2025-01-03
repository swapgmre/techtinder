const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  //Route Handler
  // res.send("Route Handler 1");
  console.log("Handling the route user 1!!");
  next();
  // res.send("Reesponse!!");
},
  (req, res, next) => {
    //route handler 2
    console.log("Handlin the route user 2!!");
    // res.send("2nd Response")
    next();
  }, (req, res, next) => {
    console.log("Handlin the route user 3!!");
    // res.send("3rd Response")
    next();
  }, (req, res, next) => {
    console.log("Handlin the route user 4!!");
    // res.send("4th Response")
    next();
  });

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....")
});