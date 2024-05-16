import { MercadoPagoConfig, Preference } from 'mercadopago';
import {BACKEND_URL} from "../config.js"

import { db } from "../connect.js";

export const createOrder = async (req, res) => {

    const client = new MercadoPagoConfig({ accessToken: 'TEST-5218571602676801-050822-9ecd472134a3478ccb449cc9f1924100-1803280763' });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        back_urls:{
          success: BACKEND_URL+'/server/postpayment/success/' + req.params.idSubscription,
          failure: BACKEND_URL+'/server/postpayment/failure',
          pending: BACKEND_URL+'/server/postpayment/pending'
      },
        items: [
          {
            title: 'Suscripcion 1 mes Company Ranker',
            quantity: 1,
            unit_price: 5000
          }
        ],
        
        
      }
    })
    

    console.log(result);
    res.redirect(result.init_point);

        
    }

export const getSubscription = (req, res) => {
    const id = req.params.idSubscription;
    db.query("SELECT * FROM Subscription WHERE idSubscription = ?", [id], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error al obtener la suscripción");
        }

        return res.status(200).send(data[0]);
    });


 }



  
  
