const express = require('express')
const router = express.Router();
const Byproduct = require("../Models/Byproduct");

router.post("/",async (req,res)=>{
    const { itemName,itemByproduct, use } = req.body;
    const byproduct = new Byproduct({
        itemName,
        itemByproduct,
        use
    })
    try{
        newByproduct = await byproduct.save();
        res.status(201).json({ error: "" });
    }
    catch(error){
        res.status(400).json({ error });
    }
})
module.exports = router;