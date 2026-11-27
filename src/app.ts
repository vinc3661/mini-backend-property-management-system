import express from "express";
import tenantRoutes from "./routes/tenants.routes";
import userRoutes from "./routes/user.routes";
import paymentRoutes from "./routes/payment.routes";
const app = express();

;

app.use(express.json());

app.use("/api/payments",paymentRoutes);
app.use("/api/tenants", tenantRoutes);
app.use("/api/users", userRoutes);

export default app;