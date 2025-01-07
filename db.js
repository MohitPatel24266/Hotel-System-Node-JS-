//db.js
//qfe74QikdMyvwm0t
const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL=process.env.MONGO_URL;

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