const express=require("express");
const app=express();
app.use(express.json());
const propertyRoutes=require("../routes/property.routes");
app.use("/api/properties",propertyRoutes);


exports.modules=app;