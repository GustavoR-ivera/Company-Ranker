 import { db } from "../connect.js";
 import {FRONTEND_URL} from "../config.js"

import { checkAccount} from "./accountcheck.js";



export const success = (req, res) => {

    //ajustar captura de id suscripcion desde el front
    const id = req.params.idSubscription;
//establecer fechas de suscripcion yy/mm/dd hh:mm:ss
    const d = Date.now();
    const date = new Date(d); 
    const start_date = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() +" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const end_date = date.getFullYear() + "/" + (date.getMonth() + 2) + "/" + date.getDate() +" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const query = `UPDATE Subscription SET Status_Subscription = 1, Start_Date = ?, End_Date=? WHERE idSubscription = ?`;
    db.query(query,[ start_date, end_date, id], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error al activar la suscripción_1");
        }

        checkAccount();

        //validacion update subscription
        if (data.affectedRows > 0) {
            //update user role
            const id = req.params.idSubscription;
            const q = `update User set Role = 'premium' where Subscription_idSubscription = ?` ;
            db.query(q, [id], (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send("Error al activar la suscripción_2");
                }
            });
            return res.redirect(FRONTEND_URL);
        }else{
            return res.status(500).send("Error al activar la suscripción_3");
        }
        
    });

}


export const failure = (req, res) => {
}

export const pending = (req, res) => {
}