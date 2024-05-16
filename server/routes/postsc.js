
import express  from "express";
import { addPost, deletePost, getPosts, getUserReviews } from "../controllers/postc.js";

const router = express.Router()

//obtener las reseñas de productos
router.get("/", getPosts)   
//obtener las reseñas de productos de un usuario
router.get("/getUserReviews/:id", getUserReviews) 
//registrar una reseña de producto
router.post("/add-customer-review", addPost) 


router.delete("/:id", deletePost)

export default router 