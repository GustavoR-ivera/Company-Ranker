import express  from "express";
import {getLikesfromUser, addCostumerLike, addJobLike, addCostumerDislike, addJobDislike} from "../controllers/like.js";

const router = express.Router()

router.get("/:userId", getLikesfromUser)
router.post("/likeC", addCostumerLike)
router.post("/likeJ", addJobLike)
router.post("/dislikeC", addCostumerDislike)
router.post("/dislikeJ", addJobDislike)

export default router