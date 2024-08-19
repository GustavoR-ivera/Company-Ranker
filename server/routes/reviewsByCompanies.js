import express  from "express";
import { getCustomerReviewsByCompany, getJobReviewsByCompany } from "../controllers/reviewsByCompanies.js";

const router = express.Router()


//obtener las reseñas de asociadas a una empresa
router.get("/getCustomerReviewsByCompany/:id", getCustomerReviewsByCompany) 
router.get("/getJobReviewsByCompany/:id", getJobReviewsByCompany) 
export default router 