import mongoose from "mongoose";

const db = function () {
  const uri =
    "mongodb+srv://admin:yssqZf9lT6L5GUCg@mini-project-api-7gdhd.mongodb.net/test?retryWrites=true&w=majority";

  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(uri);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
};

export default db;
