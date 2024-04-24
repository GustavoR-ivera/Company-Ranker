import express  from "express";
import {getPostsj} from "../controllers/postj.js";

const router = express.Router()

router.get("/", getPostsj)

export default router