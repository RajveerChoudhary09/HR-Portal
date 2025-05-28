import  express from "express";
import connectDB from "./src/config/db.js";
import router from "./src/routes/authRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use (express.json())
app.use ("/auth",router)


app.get("/",(req,res)=>{
    res.status(200).json({message:"server working"});
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
      console.log("Server Started at Port", port);
      connectDB();
})