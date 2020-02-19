import { Router } from "express";
import { verify } from "jsonwebtoken";

//services
import verifyToken from "../services/verifyToken";
import hashCompare from "../services/hashCompare";
import inputValidation from "../services/inputValidation";

//model
import findUser from "../models/loginModel";

const router = Router();

router.post("/", [inputValidation.login, findUser, hashCompare], (req, res) => {
  // verify(req.token, "test", (err, authData) => {
  //   if (err) {
  //     res.sendStatus(403);
  //   } else {
  //     res.json({
  //       msg: "Post created",
  //       authData
  //     });
  //   }
  // });
  // if (req.body.validate) {
  //   res.send("Input validation failed" + req.body.validate);
  // } else {
  //   res.send("Input validation success");
  // }
});

router.post("/test", hashCompare, (req, res) => {});

export default router;
