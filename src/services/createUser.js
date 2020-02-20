//import model
import registrationModel from "../models/registrationModel";

const createUser = (req, res, next) => {
  console.log("User creation started");

  registrationModel.findOne({ email: req.body.email }, (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
    } else {
      //check if user already exists or not
      if (data !== null) {
        console.log("User already exist");
        res.json({ msg: "User already exist" });
      } else {
        //if user not exists create a new user
        const newUser = registrationModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        newUser.save();

        console.log("User created");
        res.json({ msg: "User created" });
      }
    }
  });
};

export default createUser;
