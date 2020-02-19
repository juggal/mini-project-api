import { Schema } from "mongoose";

//creating login schema
const loginSchema = Schema({
  email: String,
  password: String
});

export default loginSchema;
