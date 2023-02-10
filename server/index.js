import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import cors from  'cors'
import bcrypt from "bcrypt"

import {validationResult} from 'express-validator'
import {registerValidation, loginValidation, postCreateValidation} from './Validations/validations.js'

import TestModel from './models/Test.js'
import UserModel from "./models/User.js"
import checkAuth from './utils/checkAuth.js'

import *as UserController from './controllers/UserController.js'
import *as PostController from './controllers/PostController.js'
import PostModel from "./models/Post.js";

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://Davimuler:135792468@cluster0.zfojr0v.mongodb.net/blog?retryWrites=true&w=majority').then(
    ()=>{
        console.log('DB OK')
    }
).catch((err)=>{
    console.log('DB error',err)
})

const app=express();

app.use(express.json())

app.use(cors());

app.get('/',(req, res)=>{
res.send('gello')
})
app.post('/test',async (req,res)=>{
    try{
        const doc=new TestModel({
            fullName:req.body.fullName,
            email:req.body.email
        })
        const test=await doc.save();

        res.json(test)
    }catch(err){
        console.log(req.body.fullName);
        res.status(500).json({
            message:'Error to create test'
        })
    }
}
)
// app.get('/post',PostController.getAll)
// app.get('/post/:id',PostController.getOne)
app.post('/post',postCreateValidation,PostController.create)
// app.delete('/post',PostController.remove)
// app.patch('/post',PostController.update)


app.get('/auth/me',checkAuth,UserController.getMe)
app.get('/users',async(req, res)=>{
    try{
        const users = await UserModel.find({});

        if (!users) {
            return res.status(404).json({
                message: 'No users',
            });
        }
        // users.map(x => x * 2);
        // const { passwordHash, ...usersData } = users._doc;
        res.json(users);

    }catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'No access',
        });
    }
})

app.post('/auth/login',loginValidation,UserController.login);

app.post('/auth/register',registerValidation,UserController.register)

app.listen(4444,(err)=>{
    if(err){
        return console.log(err)
    }
    return console.log('server OK')
})