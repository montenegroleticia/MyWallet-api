import bcrypt from "bcrypt";
import db from "../database/database.conection.js";
import { v4 as uuid } from "uuid";

export async function postCadastro(req, res) {
  const { email, senha } = req.body;

  try {
    const user = await db.collection("usuarios").findOne({ email });
    if (user) return res.status(409).send("Esse email já existe");

    const hash = bcrypt.hashSync(senha, 10);

    await db.collection("usuarios").insertOne({ email, hash });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postLogin(req, res) {
  const { email, senha } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });
    if (!user) return res.status(401).send("Email inválido!");

    const passwordIsCorrect = bcrypt.compareSync(senha, user.senha);
    if (!passwordIsCorrect) return res.status(401).send("Senha incorreta!");

    const token = uuid();
    await db.collection("sections").insertOne({ token, userId: user._id });
    res.status(200).send(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
