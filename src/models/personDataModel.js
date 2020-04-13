import { Schema, model } from "mongoose";

//creating search database model
const personDataModel = Schema({
  name: String,
  email: String,
  gender: String,
  marriage: String,
  city: String,
  state: String,
});

export default model("person", personDataModel);
