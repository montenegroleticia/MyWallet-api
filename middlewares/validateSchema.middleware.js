import userSchema from "../schemas/user.schema.js";

export default function validateSchema(req, res, next) {
  const validation = userSchema.validate(req.body, { abortEarly: false });
  if (validation.err) {
    const erros = validation.err.details.map((detail) => detail.message);
    return res.status(422).send(erros);
  }
  next();
}
