const express=require('express');

const cors=require('cors');
const { userRouter } = require('./routes/user.route');
const { postRouter } = require('./routes/posts.route');
const {connection} = require('./db');

const app=express();
app.use(express.json())
app.use(cors());
app.use('/users',userRouter)
app.use('/post',postRouter)
require('dotenv').config();

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`listening on port ${process.env.port} `);
        console.log('connected to db');
    } catch (error) {
        console.log(error);
        console.log('something went wrong');
    }
})