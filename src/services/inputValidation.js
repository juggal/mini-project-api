import joi from "@hapi/joi";

const registrationSchema = joi.object({
  name: joi
    .string()
    .lowercase()
    .max(30)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  password: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
});

const loginSchema = joi.object({
  email: joi.string().email(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
});

const contactSchema = joi.object({
  name: joi
    .string()
    .lowercase()
    .max(30)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  message: joi
    .string()
    .lowercase()
    .required()
});

const validation = {
  login: (req, res, next) => {
    // console.log(req.body);
    const value = loginSchema.validate(req.body);
    // console.log(value);
    req.body.validate = value.error;
    next();
  },
  register: (req, res, next) => {
    const value = registrationSchema.validate(req.body);
    req.body.validate = value.error;
    next();
  },
  contact: (req, res, next) => {
    const value = contactSchema.validate(req.body);
    req.body.validate = value.error;
    next();
  }
};

export default validation;
