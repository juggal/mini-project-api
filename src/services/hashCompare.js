//Comparing plain text password with hash of the password
import { compare, hash } from "bcrypt";

function hashCompare(req, res, next) {
  compare(req.body.password, req.body.hash, (err, result) => {
    if (result) {
      console.log("Login successful");
      res.sendStatus(200);
    } else {
      console.log("fail");
      res.sendStatus(403);
    }
  });
}

export default hashCompare;
