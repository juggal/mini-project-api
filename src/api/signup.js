import { Router } from "express";

//services
import encrypt from "../services/encrypt";
import inputValidation from "../services/inputValidation";
import createUser from "../services/createUser";

const router = Router();

router.post(
  "/",
  [inputValidation("registrationSchema"), encrypt, createUser],
  (req, res) => {}
);

export default router;
