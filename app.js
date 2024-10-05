require("dotenv").config()
const ConnectionDB=require("./database/conn")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")

const corsOption= {
  origin:"http://localhost:5173",
  method:"POST ,GET ,DELETE ,PATCH",
  Credential:true
}

app.use(cors())
app.use(express.json())

const adminRouter = require("./routers/admin-router")
const authRouter= require("./routers/auth-router")
const errorMiddleware = require("./middlewares/error-middleware")

app.use("/api/admin",adminRouter)
app.use("/api/auth",authRouter)

app.use(errorMiddleware)
ConnectionDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Port listening at ${PORT}`)
})

})
