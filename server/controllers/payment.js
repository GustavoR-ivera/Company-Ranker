import { MercadoPagoConfig, Preference } from 'mercadopago';
import { db } from "../connect.js";

export const createOrder = async (req, res) => {

    const client = new MercadoPagoConfig({ accessToken: 'TEST-5218571602676801-050822-9ecd472134a3478ccb449cc9f1924100-1803280763' });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        back_urls:{
          success: 'http://localhost:8800/server/postpayment/success/' + req.params.idSubscription,
          failure: 'http://localhost:8800/server/postpayment/failure',
          pending: 'http://localhost:8800/server/postpayment/pending'
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



  
  
