// import person data model
import personDataModel from "../models/personDataModel";

const searchPerson = (req, res, next) => {
  console.log("search query recieved");

  if (req.query.name) {
    const personName = req.query.name;
    personDataModel.find(
      { name: { $regex: personName, $options: "i" } },
      (err, data) => {
        if (err) res.status(500).json({ msg: "search could not be completed" });
        else {
          console.log({ data: data });
          res.json({ data: data });
        }
      }
    );
  } else if (req.query.email) {
    const personEmail = req.query.email;
    personDataModel.find(
      { email: { $regex: personEmail, $options: "i" } },
      (err, data) => {
        if (err) res.status(500).json({ msg: "search could not be completed" });
        else {
          console.log({ data: data });
          res.json({ data: data });
        }
      }
    );
  }
};

export default searchPerson;
