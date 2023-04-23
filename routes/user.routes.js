import { Router } from "express";
import { postCadastro, postLogin } from "../controllers/user.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import userSchema from "../schemas/user.schema.js";

const router = Router();

router.post("/cadastro", validateSchema(userSchema), postCadastro);
router.post("/", validateSchema(userSchema), postLogin);
export default router;
