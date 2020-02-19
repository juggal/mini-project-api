import { sign } from "jsonwebtoken";

function createToken(user) {
  const token = sign({ user: user }, "test", { expiresIn: "1h" });
  return token;
}

export default createToken;
