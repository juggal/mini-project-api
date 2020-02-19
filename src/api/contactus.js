import { Router } from "express";
import bodyParser from "body-parser";

// services
import inputValidation from "../services/inputValidation";

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", inputValidation.contact, (req, res) => {
  res.json({ msg: "Your request has been accepted" });
});

export default router;
