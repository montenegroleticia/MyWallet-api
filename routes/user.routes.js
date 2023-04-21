import { Router } from "express";
import { postCadastro, postLogin } from "../controllers/user.controller.js";

const router = Router();

router.post("/cadastro", postCadastro);
router.post("/", postLogin);
export default router;
