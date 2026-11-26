import express from "express";
import { createPayment } from "../controllers/payment.controller";

const router=express.Router();

router.post("/",createPayment);

export default router;