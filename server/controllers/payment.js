import { MercadoPagoConfig, Payment } from 'mercadopago';

export const createOrder = async (req, res) => {

   

    // Step 2: Initialize the client object
    const client = new MercadoPagoConfig({ accessToken: 'TEST-5218571602676801-050822-9ecd472134a3478ccb449cc9f1924100-1803280763', options: { timeout: 5000, idempotencyKey: 'abc' } });

    // Step 3: Initialize the API object
    const payment = new Payment(client);

    // Step 4: Create the request object
    const body = {
        transaction_amount: 12.34,
        description: '<DESCRIPTION>',
        payment_method_id: 'PSE',
        payer: {
            email: 'test_user_54703457@testuser.com'
        },
        token: 'ff8080814c11e237014c1ff593b57b4d'
    };

   

    // Step 6: Make the request
    payment.create({ body}).then(console.log).catch(console.log);
    
    res.send('Create order');
    }
