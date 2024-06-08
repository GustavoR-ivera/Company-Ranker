import express  from "express";
import { getUserProfile } from "../controllers/userProfile.js";


const routes = express.Router()


routes.get("/", getUserProfile) 

export default routes