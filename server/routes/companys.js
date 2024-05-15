import express  from "express";
import { getCompanys } from "../controllers/company.js";


const router = express.Router()


router.get("/", getCompanys) 

export default router 