const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send({ firstName: "Swapnil", lastName: "Gamre" });
})

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777....")
});