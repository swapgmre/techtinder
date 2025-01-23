const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const { validateSignUpData, validateLoginInput } = require("../utils/validation");
const bcrypt = require("bcrypt")




authRouter.post("/signup", async (req, res) => {
  try {
    //Validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Creating a new Instance  of the User model
    const user = new User({
      firstName, lastName, emailId, password: passwordHash
    });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR" + err.message);
  }
});


authRouter.post("/login", async (req, res) => {
  try {
    validateLoginInput(req);

    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {

      const token = await user.getJWT();

      //Add the token to cookie and send the response back to the user
      res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) });
      res.send(user);
    } else {
      throw new Error("Invalid Credentials")
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});


authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  })
  res.send("Logout successfull !!! ");
})


module.exports = authRouter;