import  express from "express";
const app = express();



app.get("/",(req,res)=>{
    res.status(200).json({message:"server working"});
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
      console.log("Server Started at Port", port);
})