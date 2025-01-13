//index.js
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT||3000;

//Database Connection
const db = require('./db');

//Body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Middleware 
const logReq=(req,res,next)=>{
    console.log(`[${new Date().toLocaleDateString()}] Request Move to : ${req.originalUrl}`);
    next();
}
app.use(logReq);

//Passport Authentication Initialization
const passport=require('./auth');
app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false})
app.get('/',(req, res) => {
    res.send('hello world')
})

//Person Route
const personRoute=require("./routes/personRoutes");
app.use('/person',personRoute);

//Menu Route
const menuRouter = require("./routes/menuRoutes");
app.use("/menu",menuRouter);

//listining on 3000 port
app.listen(port, () => {
    console.log(`Server listining in ${port} : http://localhost:3000/person`)
});
