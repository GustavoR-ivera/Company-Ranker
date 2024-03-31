import  express  from "express"
import authRoutes from "./routes/auth.js"
// import userRoutes from "./routes/users.js"
// import dislikeRoutes from "./routes/dislikes.js"
// import likeRoutes from "./routes/likes.js"
// import postjsRoutes from "./routes/postsj.js"
// import postscRoutes from "./routes/postsc.js"

//import cors from "cors" ++
//import cookieParser from "cors" ++

const app = express()



//middleware
app.use(express.json())
//app.use(cors()) ++
//app.use(cookieParser()) ++


app.use("/server/auth" , authRoutes)
// app.use("/server/users" , userRoutes)
// app.use("/server/dislikes" , dislikeRoutes)
// app.use("/server/likes" , likeRoutes)
// app.use("/server/postsj" , postjsRoutes)
// app.use("/server/postsc" , postscRoutes)

app.listen(8800, () => {
    console.log("Server is running on port 8800")
})