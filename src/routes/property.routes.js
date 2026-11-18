const express=require("express");
const router=express.Router();
const {createProperty, getProperty}=require("../controllers/property.controller");
router.post("/",createProperty);
router.get("/",getProperty);
module.exports=router;