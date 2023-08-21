const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongoURL)
.then(()=>{
    console.log('connected to mongoDB');
})
.catch((eroor)=>{
    console.log('Error connecting to mongoDB',error);
});

module.exports=mongoose.connection