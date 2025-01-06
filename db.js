//db.js
const mongoose = require('mongoose');

const mongoURL='mongodb://localhost:27017/hotel';

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