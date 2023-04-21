import { Router } from "express";
import {
  postTransacao,
  getHome,
} from "../controllers/transaction.controller.js";

const router = Router();

router.post("/nova-transacao/:tipo", postTransacao);
router.get("/home", getHome);
export default router;
