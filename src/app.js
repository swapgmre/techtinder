const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  res.send("Hello user")
});

//This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({
    "firstName": "swapnil",
    "lastName": "Gamre"
  })
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved to the database")
});

// this will handle all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server")
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....")
});