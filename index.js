// var fs = require('fs');
// var os=require('os');

// var user= os.userInfo();
// console.log(user);

// fs.appendFile('text-1',"Hello mohit\n",()=>{
//     console.log(`hello ${user.username}!` );
// })

// app.get('/get',(req,res)=>{
//     let obj={
//         name:"mohit",
//         age:22,
//         is_studying:true
//     }
//     res.send(obj);
// })

const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello world')
})
const db = require('./db');
const Person = require('./models/Person');
const MenuItem = require('./models/Menu');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRoute=require("./routes/personRoutes");
app.use('/person',personRoute);


const menuRouter = require("./routes/menuRoutes");
app.use("/menu",menuRouter);



app.listen(port, () => {
    console.log(`Server listining in ${port} : http://localhost:3000/person`)
});
