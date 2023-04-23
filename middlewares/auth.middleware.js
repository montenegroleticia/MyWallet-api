import db from "../database/database.conection.js";

export default async function authValidation(req, res, next) {
  const { autorization } = req.header;
  const token = autorization?.replace("Bearer", "");
  if (!token) return res.sendStatus(401);

  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) return res.sendStatus(401);

    res.locals.session = session;

    next();
  } catch {
    res.status(500).send(err.message);
  }
}
