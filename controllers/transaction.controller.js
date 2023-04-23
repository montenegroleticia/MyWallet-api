import db from "../database/database.conection.js";

export async function postTransacao(req, res) {}

export async function getHome(req, res) {
  try {
    const transactions = await db.collection("transactions").find();
    res.send(transactions);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
