import csv from "csv-parser";
import fs from "fs";

//models
import personDataModel from "../models/personDataModel";

const uploadData = (req, res, next) => {
  let count = 0;
  let dataList = [];

  console.log("Data upload started");

  fs.createReadStream(__dirname + "/../upload/data.csv")
    .pipe(csv())
    .on("data", (row) => {
      dataList.push(row);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
      console.log(dataList.length);
      console.log("Saving records to database started");

      dataList.forEach((record) => {
        const person = personDataModel({
          name: record.Name,
          email: record.Email,
          gender: record.Sex,
          marriage: record.Status,
          city: record.City,
          state: record.State,
        });

        person.save((err) => {
          if (err) throw err;
          console.log(++count);
        });
      });
      next();
    });
};

export default uploadData;
