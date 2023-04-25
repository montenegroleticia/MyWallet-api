import { Router } from "express";
import {
  postTransacao,
  getHome,
  deleteTransaction
} from "../controllers/transaction.controller.js";
import authValidation from "../middlewares/auth.middleware.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import transactionSchema from "../schemas/transaction.schema.js";

const router = Router();

router.post(
  "/nova-transacao/:tipo",
  authValidation,
  validateSchema(transactionSchema),
  postTransacao
);
router.get("/home", authValidation, getHome);
router.delete("/:id", authValidation, deleteTransaction);
export default router;
