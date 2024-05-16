import { Router} from "express";
import {success, pending, failure} from "../controllers/postpayment.js";

const router = Router()

router.get('/success/:idSubscription', success)
router.get('/pending', pending)
router.get('/failure', failure)

export default router