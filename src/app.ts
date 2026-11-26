import express from "express";
import tenantRoutes from "./routes/tenants.routes";
import userRoutes from "./routes/user.routes";

const app = express();

;

app.use(express.json());


app.use("/api/tenants", tenantRoutes);
app.use("/api/users", userRoutes);

export default app;