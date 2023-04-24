export default function validateSchema(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.erro) {
      const errors = validation.erro.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
    next();
  };
}
