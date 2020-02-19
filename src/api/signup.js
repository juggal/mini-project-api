import { Router } from "express";

//services
import createToken from "../services/createToken";
import encrypt from "../services/encrypt";
import inputValidation from "../services/inputValidation";

//services
import createUser from "../services/createUser";

const router = Router();

router.post("/", [inputValidation.register, encrypt], (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  console.log(user);
  // const token = createToken(user);
  // res.status(200).json({ token: token });
  createUser(user);
  res.sendStatus(200);
});

export default router;
