import joi from "joi";

const transactionSchema = joi.object({
  valor: joi.number().integer().positive().required(),
  descricao: joi.string().required(),
});

export default transactionSchema;
