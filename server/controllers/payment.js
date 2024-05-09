import { MercadoPagoConfig, Preference } from 'mercadopago';

export const createOrder = async (req, res) => {

   

 
    

    const client = new MercadoPagoConfig({ accessToken: 'TEST-5218571602676801-050822-9ecd472134a3478ccb449cc9f1924100-1803280763' });

    const preference = new Preference(client);

    preference.create({
      body: {
        
        items: [
          {
            title: 'My product',
            quantity: 1,
            unit_price: 2000
          }
        ],
      }
    })
    .then(console.log)
    .catch(console.log);
    }
