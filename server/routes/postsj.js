
import express  from "express";
import { getPosts, getUserReviews, addPost } from "../controllers/postj.js";

const router = express.Router()

//obtener las reseñas laborales
router.get("/", getPosts)   
//registrar una reseña laboral
router.post("/add-job-review", addPost) 
//obtener las reseñas laborales de un usuario
router.get("/getUserReviews/:id", getUserReviews)

export default router 