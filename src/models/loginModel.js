import { Schema, model } from "mongoose";

//creating login schema
const loginSchema = Schema({
  email: String,
  password: String
});

export default model("users", loginSchema);
