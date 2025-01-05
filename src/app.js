const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth")

app.get("/getUserData", (req, res) => {
  try {
    // Logic of DB call and get user data
    throw new Error("csjjncnn");
    res.send("User data Sent")
  } catch (error) {
    res.status(500).send("Some Error Contact support team")
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something  went wrong")
  }
})

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....")
});