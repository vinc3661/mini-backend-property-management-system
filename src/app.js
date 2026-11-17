const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message:"property API is running"
    });
});
const propertyRoutes = require("./routes/property.routes");
app.use("/api/properties",propertyRoutes);
module.exports = app;