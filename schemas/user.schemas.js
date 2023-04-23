import joi from "joi";

const userSchema = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().required().min(3),
});

export default userSchema;
