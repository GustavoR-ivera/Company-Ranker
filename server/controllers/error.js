import { db } from "../connect.js";
import moment from "moment";



export const addError = (req, res) => {


    const values = [
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        req.body.contact,
        req.body.comment
      ];
    const q = "INSERT INTO Error_Comments (`creationTime`, `contact`, `comment`) VALUES (?)";
db.query(q, [values], (err, data) => {
    if (data) return res.status(500).send("Enviando tu formulario");
    else {
        console.log(err)
        return res.status(409).send("Error al enviar tu formulario");}

  });
};