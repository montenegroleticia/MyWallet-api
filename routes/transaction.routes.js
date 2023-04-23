import { Router } from "express";
import {
  postTransacao,
  getHome,
} from "../controllers/transaction.controller.js";
import authValidation from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authValidation);

router.post("/nova-transacao/:tipo", postTransacao);
router.get("/home", authValidation, getHome);
export default router;
