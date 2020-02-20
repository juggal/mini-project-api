//Comparing plain text password with hash of the password
import { compare, hash } from "bcrypt";

function hashCompare(req, res, next) {
  console.log("Hash comparision started");
  compare(req.body.password, req.body.hash, (err, result) => {
    if (result) {
      next();
    } else {
      console.log("fail");
      res.sendStatus(403);
    }
  });
}

export default hashCompare;
