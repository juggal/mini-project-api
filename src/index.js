import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

//controllers
import login from "./api/login";
import signup from "./api/signup";
import contactus from "./api/contactus";
import search from "./api/search";
import admin from "./api/admin";

import db from "./services/mongoConnect";

const app = express();
const port = process.env.PORT || 3000;

//mounting middleware to globally
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

//Controller attached to app object
app.use("/api/login", login);
app.use("/api/signup", signup);
app.use("/api/contact", contactus);
app.use("/api/search", search);
app.use("/api/admin", admin);

//initializing a server
app.listen(port, (err) => {
  if (err) throw err;
  //creating connection to database
  db();
  console.log(`Server started on ${port}`);
});
