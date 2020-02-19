import { model } from "mongoose";

//import services
import db from "./mongoConnect";

//import model
import registrationSchema from "../models/registrationModel";

const createUser = (req, res, next) => {
  db.once("open", () => {
    console.log("Database connected");

    const registrationModel = model("users", registrationSchema);

    registrationModel.findOne(user.email, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        if (data) {
          console.log("User already exits");
        } else {
          console.log("User created");
        }
      }
    });
  });
};

export default createUser;
