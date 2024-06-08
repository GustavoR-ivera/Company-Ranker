import { db } from "../connect.js";

export function getLikesfromUser(req, res) {
    q = "SELECT * FROM Likes WHERE userId = ?"
    db.query(q, [req.params.userId], (err, data) => {
       if(data) return res.status(200).send(data)

       else return res.status(404).send("No se encontraron likes para el usuario" + req.params.userId)
    });
}