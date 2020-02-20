import { Router } from "express";
import bodyParser from "body-parser";

// services
import inputValidation from "../services/inputValidation";
import saveEnquiry from "../services/saveEnquiry";

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post(
  "/",
  [inputValidation("contactSchema"), saveEnquiry],
  (req, res) => {
    console.log("Enquiry saved");
    res.sendStatus(200);
  }
);

export default router;
