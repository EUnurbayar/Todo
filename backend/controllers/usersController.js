import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function signin(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne(
        { email }
      )
      .lean();
    if (user) {
      console.log(user);
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const JWT_TOKEN = jwt.sign(
          {
            ...user,
            password: "",
          },
          process.env.SECRET_KEY
        );
        res.json({ success: true, data: JWT_TOKEN });
      } else {
        next(new Error("Wrong password"));
      }
    } else {
      next(new Error("User Not Found!"));
    }
  } catch (error) {
    next(error);
  }
}

export async function signup(req, res, next) {
  try {
    const new_user = req.body;
    const { password: plain_password } = new_user;

    // bcrypt password
    const saltRounds = 10;
    const hashed_password = await bcrypt.hash(plain_password, saltRounds);

    const result = await userModel.create({
      ...new_user,
      password: hashed_password,
    });
    // console.log(result)
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
}
