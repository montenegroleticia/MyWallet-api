import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import transaction from "../routes/transaction.routes.js";
import user from "../routes/user.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(transaction());
app.use(user());

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
  await mongoClient.connect();
  console.log("MongoDB conectado!");
} catch (err) {
  console.log(err.message);
}

const db = mongoClient.db();

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
