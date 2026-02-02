import express from 'express'
import { User } from '../models/userModel.js'
import {hash, compare} from 'bcryptjs'
export const userApp=express.Router()

userApp.get('/users',async (req,res)=>{
    let users=await User.find()
    res.status(200).json({message:"All users",users:users})
})
//Regggister 
userApp.post('/users',async (req,res)=>{
    let newUser= req.body
    ////console.log(newUser.password)
    let hashedPassword = await hash(newUser.password, 10)

    newUser.password = hashedPassword

        console.log(newUser)

    
    let newDoc = new User(newUser)
    await newDoc.save()
    res.status(201).json({
        message:"new user created", newDoc:newDoc
    })
})
userApp.post("/login",async (req,res)=>{

    let newcred=req.body
    let userofdb=await 

})