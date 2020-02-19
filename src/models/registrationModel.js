import { Schema } from "mongoose";

//creating login schema
const registrationSchema = Schema({
  name: String,
  email: String,
  password: String
});

export default registrationSchema;
