
import express  from "express";
import { getPosts, getUserReviews } from "../controllers/postj.js";

const router = express.Router()

//obtener las reseñas laborales
router.get("/", getPosts)   

//obtener las reseñas laborales de un usuario
router.get("/getUserReviews/:id", getUserReviews)

export default router 