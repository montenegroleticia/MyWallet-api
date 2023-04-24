export default function validateSchema(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.err) {
      const erros = validation.err.details.map((detail) => detail.message);
      return res.status(422).send(erros);
    }
    next();
  };
}
