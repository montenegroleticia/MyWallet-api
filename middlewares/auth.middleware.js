import db from "../database/database.conection.js";

export default async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  if (!token) return res.sendStatus(401);

  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) return res.sendStatus(404);

    res.locals.session = session;
    res.locals.token = token;
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
}
