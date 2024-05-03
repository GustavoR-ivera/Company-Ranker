import {PORT, FRONTEND_URL} from "./config.js"
import path from 'path';
import { fileURLToPath } from 'url';


import express from "express";
import authRoutes from "./routes/auth.js";
import manageReviewsRoutes from "./routes/manageReviews.js"
// import userRoutes from "./routes/users.js"
// import dislikeRoutes from "./routes/dislikes.js"
// import likeRoutes from "./routes/likes.js"
import postjsRoutes from "./routes/postsj.js"
import postscRoutes from "./routes/postsc.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//middleware
// // Convertir import.meta.url en una ruta de directorio
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// // Middleware para servir archivos estáticos
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// // Ruta principal que sirve tu app React
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });



app.use(express.json());

app.options("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL);
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(204);
});

//habilitar recepcion de peticiones desde el servidor de frontend
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));

app.use(cookieParser());

app.use("/server/auth", authRoutes);
app.use("/server/manage-reviews", manageReviewsRoutes);
// app.use("/server/users" , userRoutes)
// app.use("/server/dislikes" , dislikeRoutes)
// app.use("/server/likes" , likeRoutes)
app.use("/server/postsj" , postjsRoutes)
app.use("/server/postsc" , postscRoutes)

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
