import express from 'express'
import 'dotenv/config' 
import connectDB from './database/db.js' 
import { userApp } from './routes/userRoutes.js'
const PORT =3000 ||process.env.PORT
const app=express()
app.use(CookieParser())
app.use(express.json())

app.listen(PORT,()=>{
    connectDB()
console.log(`server is istening at port :${PORT}`)
}) 

app.use('/user-api', userApp);
