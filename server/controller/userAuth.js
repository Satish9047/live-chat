const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const saltRound = 10;
const secret = `${process.env.SECRET_JWT}`;

//register
const registerController = async (req, res) => {
  console.log(req.body);
  const { email, contact, password } = req.body;

  //validation
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ error: "invalid email !" });
  }

  if (!contact || !validator.isNumeric(contact)) {
    return res.status(400).json({ error: "invalid contact" });
  }

  if (!password || !validator.isLength(password, { min: 8 })) {
    return res.status(400).json({ error: "invalid password" });
  }

  const existUser = await User.findOne({email: email, contact: contact});
  if(existUser.email || existUser.contact){
    return res.status(400).json({error: "email or contact already exist"});
  }

  //hashing and saving
  try {
    bcrypt.hash(password, saltRound, async (error, hash) => {
      if (error) {
        console.log("couldn't create hashed password :", error);
        return res.status(500).json({ error: "internal server error" });
      }

      const newUser = User({
        email: email,
        contact: contact,
        password: hash,
      });
      await newUser.save();
      res.status(200).json({ message: "User register Successfully" });
    });

    
  } catch (error) {
    console.log("can't register new User", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//login
const loginController = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  //validation
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (!password || !validator.isLength(password, { min: 8 })) {
    return res.status(400).json({ error: "Invalid password" });
  }

  //calidating password and generating jwt
  try {
    //checking if user is available
    const existUser = await User.findOne({ email: String(email) });
    if (!existUser) {
      return res.status(400).json({ error: "invalid username" });
    }

    //comparing the existing user's password
    bcrypt.compare(password, existUser.password, (error, result) => {
      if (error|| !result) {
        return res.status(400).json({ error: "invalid password" });
      }
    });

    const token = jwt.sign(
      { email: existUser.email },
      secret,
      { expiresIn: "5h" },
      (error, token) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: "internal server error" });
        } else{
            console.log(token);
            res.status(200).json({ success: "login successfull", jwtToken: token });
        }
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "internal server error" });
  }
};

//exports
module.exports = {
  loginController,
  registerController,
};
