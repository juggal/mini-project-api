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
    .email({ minDomainSegments: 2 })
    .required(),
  message: joi
    .string()
    .lowercase()
    .required()
});

const selectSchema = schemaType => {
  let schema = null;
  switch (schemaType) {
    case "registrationSchema":
      schema = registrationSchema;
      break;
    case "loginSchema":
      schema = loginSchema;
      break;
    case "contactSchema":
      schema = contactSchema;
  }
  const validate = (req, res, next) => {
    const value = schema.validate(req.body);
    if (value.error) {
      res.json(value.error.details[0].message);
    } else {
      next();
    }
  };
  return validate;
};

// const validate = schemaType => {
//   return (req, res, next) => {
//     const value = schemaType.validate(req.body);
//     console.log(value.error);
//   };
// };

export default selectSchema;
