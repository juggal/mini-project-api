import { model } from "mongoose";

// import services
import db from "./mongoConnect";

//import models
import loginSchema from "../models/loginModel";

const findUser = (req, res, next) => {
  db.once("open", () => {
    console.log(`Database connected`);

    const loginModel = model("users", loginSchema);

    loginModel.findOne(req.body.email, (err, data) => {
      if (err) {
        console.log("User not found");
        res.sendStatus(404);
      } else {
        console.log(data);
        req.body.hash = data.password;
      }
      next();
    });
  });
};

export default findUser;
