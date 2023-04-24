import db from "../database/database.conection.js";

export default async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  console.log(authorization);
  if (!token) return res.sendStatus(401);
  console.log(token);
  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) return res.status(404).send("Nenhum token encontrado");

    res.locals.session = session;
    res.locals.token = token;
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
}
