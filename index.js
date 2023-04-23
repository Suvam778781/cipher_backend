const express=require("express")
const { UserRouter } = require("./Routes/userRoutes")
const { connection } = require("./config/db")
const app=express()
const cors=require("cors")
require("dotenv").config()

app.use(cors({
    origin:"*"
})) 
app.use("/user",UserRouter)
app.get("/",(req,res)=>{
    res.send({msg:"homepage"})
})
app.listen(4700,async()=>{
    try{
        await connection
        console.log("Db connected succesfully")
    }
    catch(err){

  console.log("Err while connecting to db",err)
    }
})
