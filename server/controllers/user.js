
import { db } from "../connect.js";

export const getUser = (req,res)=>{
    const userId = req.params.userId;
    const q = "SELECT idUser, Name FROM User WHERE idUser = ?";
    db.query(q, [userId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener usuario");
        } else {
            res.status(200).json(result);
        }
    });
}