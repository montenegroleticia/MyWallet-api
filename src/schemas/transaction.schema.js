import joi from "joi";

const transactionSchema = joi.object({
  valor: joi.number().positive().required(),
  descricao: joi.string().required(),
});

export default transactionSchema;
