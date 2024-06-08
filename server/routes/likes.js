import express  from "express";
import {getLikesfromUser } from "../controllers/like.js";

const router = express.Router()

router.get("/:id", getLikesfromUser)

export default router