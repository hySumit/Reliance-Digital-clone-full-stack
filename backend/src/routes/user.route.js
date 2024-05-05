const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const blackListedModel = require("../model/blacklisted")

// registeration
userRouter.post("/register", async (req, res) => {
  const { username, password, email, name, role } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist"
      })
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error while hashing the password" });
        }
        try {
          const newUser = new userModel({
            username,
            password: hash,
            email,
            name,
          });
          await newUser.save();
          return res
            .status(201)
            .json({ message: "User registered successfully" });
        } catch (error) {
          return res
            .status(400)
            .json({ message: "Error while registering the user" });
        }
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error while Finding the user" });
  }
});

// login

userRouter.post("/login", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          return res.status(500).json({ message: "Wrong Credentials" });
        }
        if (result) {
          // access token
          const accessToken = jwt.sign(
            { userID: user.id, username: user.username },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
          );

          // refresh token 
 
          const refreshToken = jwt.sign(
            { userID: user.id, username: user.username },
            process.env.REFRESH_SECRET_KEY,
            { expiresIn: "7d" }
          );
          res.status(200).json({
            message: "User logged in successfully",
            accessToken,
            refreshToken,
          });
        } else {
          res.status(401).json({
            message: "Wrong password",
          });
        }
      });
    } else {
      res.status(401).json({
        message: "Wrong password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while logging in",
      error,
    });
  }
}); 


userRouter.post("/logout",async(req,res)=>{
    const {refreshToken} = req.body
    try {
        if(!refreshToken){
            return res.status(400).json({ message: "Refresh token is required" });
        }

        const black = new blackListedModel({
            token:refreshToken,
            expires: new Date()
        })
        await black.save()
        res.status(200).json({
            message: "Logged out successfully",
          });
    } catch (error) {
        res.status(500).json({
            message: "Error while logging out",
            error,
          });
    }
})

module.exports = userRouter;
