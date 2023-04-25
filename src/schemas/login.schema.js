import joi from "joi";

const loginSchema = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().required().min(3),
});

export default loginSchema;
