import express from "express";
import productRoutes from "./product.routes.js";
import authRoutes from "./auth.routes.js";
import orderRoutes from"./order.routes.js";
import orderDetailRoutes from "./orderDetail.routes.js";
import adminRoutes from "./admin.routes.js";
import userRoutes from "./user.routes.js";

const router = express.Router();

router.use("/api/v1/product", productRoutes);
router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/order", orderRoutes);
router.use("api/v1/orderDetail", orderDetailRoutes);
router.use("api/v1/admin", adminRoutes);
router.use("api/v1/user", userRoutes);

export default router;