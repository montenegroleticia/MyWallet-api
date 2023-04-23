import db from "../database/database.conection.js";

export async function postTransacao(req, res) {}

export async function getHome(req, res) {
  try {
    const section = res.locals.section;
    const user = await db.collection("users").findOne({ _id: section.userId });
    if (user) {
      const transactions = await db
        .collection("transactions")
        .find(_id)
        .reverse();
      res.send(transactions);
    } else {
      res.send("Usuário não encontrado.");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}
