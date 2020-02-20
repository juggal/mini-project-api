//Generating the hash of plain text password and storing it in the database
import { hash } from "bcrypt";

function encrypt(req, res, next) {
  console.log("Hash creation started");
  const pwd = req.body.password;
  const saltRounds = 5;
  hash(pwd, saltRounds, (err, hash) => {
    if (err) {
      console.log("Error:" + err);
      res.sendStatus(404);
    } else {
      req.body.password = hash;
      console.log("Hash creation ended");
      next();
    }
  });
}

export default encrypt;
