//import models
import loginModel from "../models/loginModel";

const findUser = (req, res, next) => {
  console.log("User search started");

  loginModel.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      if (data !== null) {
        req.body.tokendata = {
          name: data.name,
          email: data.email,
          password: data.password,
        };
        req.body.hash = data.password;
        next();
      } else {
        res.json({ msg: "User not exists" });
      }
    }
  });
};

export default findUser;
