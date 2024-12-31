import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express() // initializing the app
const port = 4000 // defining port number where our server will run

// middleware
app.use(express.json()) // a request sent from frontend to backend is parsed using this json fucntion
app.use(cors()) // used to access backend from any frontend

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

// http method to request data from the server
app.get("/", (req,res)=>{
    res.send("API Working")
}) 

// to run the express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`) // using ``(back-tick) because that is the template literal
})

