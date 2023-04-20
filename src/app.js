import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { postCadastro, postLogin } from "../controllers/userController.js";
import {
  postTransacao,
  getHome,
} from "../controllers/transactionController.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
  await mongoClient.connect();
  console.log("MongoDB conectado!");
} catch (err) {
  console.log(err.message);
}

const db = mongoClient.db();

app.post("/cadastro", postCadastro);
app.post("/", postLogin);
app.post("/nova-transacao/:tipo", postTransacao);
app.get("/home", getHome);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
