const express=require("express");
const { registerUser } = require("../services/auth.service");
const router=express.Router();
router.post("/",registerUser);