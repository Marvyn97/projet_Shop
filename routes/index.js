import express from "express";
import productRoutes from "./product.routes.js";
import userRoutes from "./user.routes.js";

const router = express.Router();

router.use("/api/v1/product", productRoutes);
router.use("/api/v1/user", userRoutes);

export default router;