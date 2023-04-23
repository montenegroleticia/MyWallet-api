import db from "../database/database.conection.js";

export default async function authValidation(req, res, next) {
  const { autorization } = req.header;
  const token = autorization?.replace("Bearer", "");
  if (!token) return res.sendStatus(401);

  try {
    const section = await db.collection("sections").findOne({ token });
    if (!section) return res.sendStatus(401);

    res.locals.section = section;

    next();
  } catch {
    res.status(500).send(err.message);
  }
}
