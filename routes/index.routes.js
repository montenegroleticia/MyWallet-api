import { Router } from "express";
import transaction from "../routes/transaction.routes.js";
import user from "../routes/user.routes.js";

const router = Router();

router.use(transaction);
router.use(user);

export default router;
