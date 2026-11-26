import express from "express";
import { createTenant,updateTenant,getTenants } from "../controllers/tenant.controller";

const router=express.Router();

router.post("/",createTenant);
router.get("/",getTenants);
router.patch("/:id",updateTenant);

export default router;