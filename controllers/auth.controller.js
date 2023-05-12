const User = require("../model/user");
const errorFunction = require("../utils/errorFunction");
const bcrypt = require("bcryptjs");
const jwtGen = require("../utils/jwtGen");

const register = async (req, res, next) => {
  const { name, password, email } = req.body;
  try {
    const existingUser = await User.findOne({
      email,
    }).lean(true);

    if (existingUser) {
      return res.status(403).json({ message: "User Already Exists" });
    } else {
      //hashing user's password
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        name,
        password: bcryptPassword,
        email,
      });
      const token = jwtGen(newUser._id);
      return res
        .status(201)
        .json({ message: "User created successfully", token });
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json(errorFunction(true, "Error Registering"));
  }
};

const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({
            email,
          }).lean(true);
          if(!existingUser) {
            return res.status(404).json({ message: "User not found"})
          }
          const validPassword = await bcrypt.compare(password, existingUser.password)
          if(!validPassword) return res.status(401).json({message: "Incorrect password"})
          const token = jwtGen(existingUser._id)
          return res.status(200).json({ message: 'Sign in successfully', user: {name: existingUser.name, email: existingUser.email}, token})
    } catch (error) {
        return res.status(400).json(errorFunction(true, "Error Signing in"));
    }

}

module.exports = { register, signin }