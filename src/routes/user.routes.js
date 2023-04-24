import { Router } from "express";
import {
  deleteLogout,
  postCadastro,
  postLogin,
} from "../controllers/user.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import userSchema from "../schemas/user.schema.js";
import authValidation from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/cadastro", validateSchema(userSchema), postCadastro);
router.post("/", validateSchema(userSchema), postLogin);
router.delete("/logout", authValidation, deleteLogout);
export default router;
