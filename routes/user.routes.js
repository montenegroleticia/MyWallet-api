import { Router } from "express";
import { postCadastro, postLogin } from "../controllers/user.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";

const router = Router();

router.post("/cadastro", validateSchema, postCadastro);
router.post("/", validateSchema, postLogin);
export default router;
