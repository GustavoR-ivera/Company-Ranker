import {PORT, DB_USER} from "./config.js"
import express from "express";
import authRoutes from "./routes/auth.js";
import manageReviewsRoutes from "./routes/manageReviews.js"
// import userRoutes from "./routes/users.js"
// import dislikeRoutes from "./routes/dislikes.js"
// import likeRoutes from "./routes/likes.js"
import postjsRoutes from "./routes/postsj.js"
import postscRoutes from "./routes/postsc.js"
import paymentsRoutes from "./routes/payments.js"
import postpaymentRoutes from "./routes/postpayment.js"
import cors from "cors";
import cookieParser from "cookie-parser";

import morgan from "morgan";
import { repeatingFunction } from "./controllers/accountcheck.js";

const app = express();

//middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);

  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/server/auth", authRoutes);
app.use("/server/manage-reviews", manageReviewsRoutes);
// app.use("/server/users" , userRoutes)
// app.use("/server/dislikes" , dislikeRoutes)
// app.use("/server/likes" , likeRoutes)
app.use("/server/postsj" , postjsRoutes)
app.use("/server/postsc" , postscRoutes)
app.use("/server/payments", paymentsRoutes);
app.use("/server/postpayment", postpaymentRoutes);

repeatingFunction();

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
