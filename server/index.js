import express from "express";
import authRoutes from "./routes/auth.js";
import manageReviewsRoutes from "./routes/manageReviews.js"
// import userRoutes from "./routes/users.js"
// import dislikeRoutes from "./routes/dislikes.js"
// import likeRoutes from "./routes/likes.js"
import postjsRoutes from "./routes/postsj.js"
import postscRoutes from "./routes/postsc.js"
import CompanyRouter from "./routes/companys.js"

import cors from "cors";
import cookieParser from "cookie-parser";

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

app.use("/server/auth", authRoutes);
app.use("/server/manage-reviews", manageReviewsRoutes);
// app.use("/server/users" , userRoutes)
// app.use("/server/dislikes" , dislikeRoutes)
// app.use("/server/likes" , likeRoutes)
app.use("/server/postsj" , postjsRoutes)
app.use("/server/postsc" , postscRoutes)
app.use("/server/companys" , CompanyRouter)

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
