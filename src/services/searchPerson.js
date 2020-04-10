// import person data model
import personDataModel from "../models/personDataModel";

const searchPerson = (req, res, next) => {
  console.log("search query recieved");

  if (req.param("name")) {
    const personName = req.param("name");
    personDataModel.find({ name: personName }, (err, data) => {
      if (err) res.sendStatus(500);
      else {
        res.json({ data: data });
      }
    });
  } else if (req.param("email")) {
    const personEmail = req.param("email");
    personDataModel.find({ email: personEmail }, (err, data) => {
      if (err) res.sendStatus(500);
      else {
        res.json({ data: data });
      }
    });
  }
};
