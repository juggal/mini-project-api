import { Schema, model } from "mongoose";

//creating login schema
const contactusSchema = Schema({
  name: String,
  email: String,
  message: String
});

export default model("enquiries", contactusSchema);
