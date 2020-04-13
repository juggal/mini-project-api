import { Router } from "express";
import bodyParser from "body-parser";

// services
import inputValidation from "../services/inputValidation";
import saveEnquiry from "../services/saveEnquiry";

const router = Router();

router.post(
  "/",
  [inputValidation("contactSchema"), saveEnquiry],
  (req, res) => {
    console.log("Enquiry saved");
    res.json({ msg: "Enquiry saved" });
  }
);

export default router;
