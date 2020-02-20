import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

//controllers
import login from "./api/login";
import signup from "./api/signup";
import test from "./api/test";
import contactus from "./api/contactus";

const app = express();
const port = process.env.PORT || 3000;

//initializing body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

//Controller attached to app object
app.use("/api/login", login);
app.use("/api/signup", signup);
app.use("/api/test", test);
app.use("/api/contact", contactus);

//initializing a server
app.listen(port, err => {
  if (err) throw err;
  console.log(`Server started on ${port}`);
});
