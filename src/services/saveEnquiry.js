//import model
import contactusModel from "../models/contactusModel";

const saveEnquiry = (req, res, next) => {
  console.log("Saving enquiry");

  const newEnquiry = contactusModel({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  newEnquiry.save();

  console.log("Message saved");
  next();
};

export default saveEnquiry;
