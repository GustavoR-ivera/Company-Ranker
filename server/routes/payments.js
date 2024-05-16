import { Router} from "express";
import {createOrder, getSubscription} from "../controllers/payment.js";

const router = Router()


router.get('/create-order/:idSubscription', createOrder)
router.get('/getSubscription/:idSubscription', getSubscription )
router.get('/sucess', (req, res) => res.send('Order Create'))
router.get('/webhook', (req, res) => res.send('Webhook'))
 
export default router