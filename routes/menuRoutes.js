const express= require('express');
const router=express.Router();

const menu = require("./../models/Menu");

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenu=new menu(data);

        const response=await newMenu.save();

        console.log("response data ",response);
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server Error"});
    }
})

router.get("/",async(req,res)=>{
    try{
        const data=await menu.find();
        console.log("Menu Fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server Error"});
    }
})

router.get("/:taste",async (req,res)=>{
    try{
        const tasteee=req.params.taste;
        if(tasteee=='spicy'||tasteee=='sour'||tasteee=='sweet'){
            const response= await menu.find({taste:tasteee});
            console.log("Response Fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({err:"Invalid Taste type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server Error"});
    
    }
})

module.exports=router;