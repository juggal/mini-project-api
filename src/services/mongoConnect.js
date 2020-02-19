import mongoose from "mongoose";

const uri =
  "mongodb+srv://test:P663QZhrTuZbcx8T@mini-project-api-7gdhd.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

export default db;
