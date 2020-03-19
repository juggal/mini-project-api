import { verify } from "jsonwebtoken";

function verifyToken(req, res, next) {
  //get auth header value
  const bearerHeader = req.headers["authorization"];
  //   check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[1];
    //set the token
    verify(bearerToken, "test", (err, decoded) => {
      if (err) {
        console.error(err);
        res.status(403).json({ msg: err });
      } else {
        console.log("Route authenticated");
        res.json({ msg: "Route authenticated" });
      }
    });
  } else {
    console.log("Token not present");
    res.status(403).json({ msg: "Toke not present" });
    next();
  }
}

export default verifyToken;
