const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth")


// Handle Auth Middleware for all methods  - GET, POST etc so we use app.use 
app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
})

app.get("/admin/getAllData", (req, res) => {
  //lofic of  Checking if the request is authorized by Admin
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a User");
})

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....")
});