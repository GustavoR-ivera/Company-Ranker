import express  from "express";
import {getLikesfromUser, getDislikesfromUser,  addCostumerLike, addJobLike, addCostumerDislike, addJobDislike, deleteCostumerDislike, deleteJobDislike, deleteJobLike, deleteCostumerLike} from "../controllers/like.js";

const router = express.Router()

router.get("/:userId", getLikesfromUser)
router.get("/dislikes/:userId", getDislikesfromUser)
router.post("/likeC", addCostumerLike)
router.post("/likeJ", addJobLike)
router.post("/dislikeC", addCostumerDislike)
router.post("/dislikeJ", addJobDislike)
router.delete("/dislikeC", deleteCostumerDislike)
router.delete("/dislikeJ", deleteJobDislike)
router.delete("/likeJ", deleteJobLike)
router.delete("/likeC", deleteCostumerLike)


export default router