//Generating the hash of plain text password and storing it in the database
import { hash } from "bcrypt";

function encrypt(req, res, next) {
  const pwd = req.body.password;
  const saltRounds = 5;
  hash(pwd, saltRounds, (err, hash) => {
    if (err) {
      console.log("Error:" + err);
      res.sendStatus(404);
    } else {
      console.log(hash);
      req.body.password = hash;
      next();
    }
  });
}

export default encrypt;
