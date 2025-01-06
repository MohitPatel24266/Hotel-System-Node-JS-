//routes/personRoutes
const express = require('express');
const router = express.Router();
const Person = require('./../models/Person')
//Create data
router.post('/', async (req, res) => {
    try {
        const data = req.body; //Assuming the request body contains the person data

        //Create a new Person data using Person(Mongoose) model 
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log("response data", response);
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: "Internal server Error" });

    }
})

//Get All Data
router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Internal server Error" });
    }
})

//Get by  params
router.get("/:worktype", async (req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
            const response = await Person.find({work:worktype});
            console.log("response fetched");
            res.status(200).json(response);
        }else{
            res.status(404).json({err:"Invalid Work type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ err: "Internal server Error" });

    }
})

router.put("/:id",async (req,res)=>{
    try{
        const personId= req.params.id;
        const updatedResponse=req.body;

        const response= await Person.findByIdAndUpdate(personId,updatedResponse,{
            new:true, //return updated document
            runValidators:true //run mongoose validator
        });

        if(!response){
            return res.status(404).json({err:"Person not found"});
        }
        console.log(response);
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"});
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        const personId= req.params.id;

        const response= await Person.findByIdAndDelete(personId);

        
        console.log("data deleted");
        res.status(200).json({message:"Person deleted"});
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"});
        
    }
})
module.exports =router;
