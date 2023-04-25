import { Router } from "express";
import transaction from "./transaction.routes.js";
import user from "./user.routes.js";

const router = Router();

router.use(user);
router.use(transaction);

export default router;
