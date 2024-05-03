import {
  success,
  error
} from "../utill/responseWrapper.js";
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const {
      name,
      userName,
      email,
      password,
    } = req.body;

    // if (!userName || !name || !email || !password || !cpassword) {
    //   return res.send(error(401, "All fields are required"));
    // }

    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      return res.send({ msg: "User already exist, can go for signin" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = Admin.create({
      name,
      userName,
      email,
      password: hashedPassword,
    });

    // const token = jwt.sign({ _id: user._id, userName },
    //   process.env.JWT_SECRET_KEY,
    //   {
    //     expiresIn: "3d",
    //   });

    // res.cookie("token", token, {
    //   path: "/",
    //   sameSite: "lax",
    //   httpOnly: true,
    //   expires: new Date(Date.now() + 1000 * 24 * 60 * 60 * 3),
    // });

    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.send(error(500, err.msg));
  }
}


const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const existingUser = await Admin.findOne({ userName });
    if (!existingUser) {
      return res.status(200).send({ message: "Invalid login details" });
    }

    const matched = await bcrypt.compare(password, existingUser.password);
    if (!matched) {
      return res.send({ message: "Password did not match!" });
    }

    const token = jwt.sign(
      { _id: existingUser._id, userName },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '3d' }
    );

    res.cookie("token", token, {
      // path: "/",
      // sameSite: "lax",
      // httpOnly: true,
      expires: new Date(Date.now() + 1000 * 24 * 60 * 60 * 3),
    });

    res.send(success(200, "Ok from login"));
  } catch (error) {
    console.log(error);
  }
}

const logout = (req, res) => {
  try {
    cookie.remove()
  } catch (error) {
    console.log(error);
  }
}

export {
  signup,
  login,
  logout
}