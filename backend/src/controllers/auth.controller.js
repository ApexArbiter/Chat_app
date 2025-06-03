import User from "../models/user.model.js";
import { generateToken } from "../utils/token.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (password < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });

    const user = await User.findone({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "invalid user data" });
    }
  } catch (err) {
    res.status(500).json({ message: "internal Server error" });
    console.log("Error in Controller while ");
  }
};
export const login = (req, res) => {
  res.send("login route");
};
export const logout = (req, res) => {
  res.send("logout route");
};
