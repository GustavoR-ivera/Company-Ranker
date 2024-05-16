import express  from "express";
import { addError } from "../controllers/error.js";

const router = express.Router()

router.post("/", addError)

export default router