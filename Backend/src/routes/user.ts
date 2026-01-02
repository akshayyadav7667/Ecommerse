
import express from 'express'
import { newUser } from '../controllers/user.js';

const app= express.Router();



app.post("/new",newUser)

app.get('/',(req,res)=>{
    console.log("Hello")

    res.status(200).json({msg:"Api is working"})
})

export default app;