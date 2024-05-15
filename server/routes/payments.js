import { Router} from "express";
import {createOrder} from "../controllers/payment.js";

const router = Router()


router.get('/create-order', createOrder)
router.get('/sucess', (req, res) => res.send('Order Create'))
router.get('/webhook', (req, res) => res.send('Webhook'))

export default router