import express from "express";
import cors from "cors";
import transactionRouter from "../routes/transaction.routes.js";
import userRouter from "../routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(transactionRouter());
app.use(userRouter());

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
