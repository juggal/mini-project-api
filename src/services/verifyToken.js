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
        res.sendStatus(403);
      } else if (typeof decoded == "undefined") {
        console.log("Token malfunctioned");
        res.sendStatus(403);
        // next()
      } else {
        console.log("Route authenticated");
        res.json({ msg: "Route authenticated" });
        // next();
      }
    });
  } else {
    console.log("Token not present");
    res.sendStatus(403);
    next();
  }
}

export default verifyToken;
