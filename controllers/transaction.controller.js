import db from "../database/database.conection.js";

export async function postTransacao(req, res) {}

export async function getHome(req, res) {
  const { autorization } = req.header;
  const token = autorization?.replace("Bearer", "");

  if (!token) return res.sendStatus(401);

  try {
    const section = await db.collection("sections").findOne({ token });
    if (!section) return res.sendStatus(401);

    const user = await db.collection("users").findOne({ _id: section.userId });
    if (user) {
      const transactions = await db
        .collection("transactions")
        .find(_id)
        .reverse();
      res.send(transactions);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}
