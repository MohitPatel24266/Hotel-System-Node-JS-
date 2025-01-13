//db.js
const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL=process.env.MONGO_URL;
const mongoURL=process.env.MONGO_LOCAL_URL;
mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("mongoDB connected");
});

db.on('error',(err)=>{
    console.log("mongoDB not connected : ",err);
})

db.on('disconnected',()=>{
    console.log("mongoDB disconnected");
})

module.exports=db;