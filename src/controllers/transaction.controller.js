import { ObjectId } from "mongodb";
import db from "../database/database.conection.js";

const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const date = day + "/" + month;

export async function postTransacao(req, res) {
  const { valor, descricao } = req.body;
  const { tipo } = req.params;

  if (tipo !== "entrada" && tipo !== "saida") return res.sendStatus(422);
  const session = res.locals.session;

  try {
    await db.collection("transactions").insertOne({
      userId: session.userId,
      tipo: tipo,
      valor: valor,
      descricao: descricao,
      data: date,
    });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getHome(req, res) {
  try {
    const session = res.locals.session;
    const user = await db.collection("users").findOne({ _id: session.userId });
    if (user) {
      const transactions = await db
        .collection("transactions")
        .find({ userId: session.userId })
        .toArray();
      res.send(transactions.reverse());
    } else {
      res.send("Usuário não encontrado.");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function deleteTransaction(req, res) {
  const { id } = req.params;

  try {
    const transactions = await db
      .collection("transactions")
      .deleteOne({ _id: new ObjectId(id) });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
