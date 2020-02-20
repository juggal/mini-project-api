import { Router } from "express";

//services
import hashCompare from "../services/hashCompare";
import inputValidation from "../services/inputValidation";
import findUser from "../services/findUser";
import createToken from "../services/createToken";
import verifyToken from "../services/verifyToken";

const router = Router();

router.post(
  "/",
  [inputValidation("loginSchema"), findUser, hashCompare],
  (req, res) => {
    res.json({
      msg: "Login Successful",
      token: createToken(req.body.tokendata)
    });
    // console.log("after middleware");
  }
);

router.post("/testtoken", verifyToken, (req, res) => {
  res.json({ msg: "Route authentication done" });
});

export default router;
