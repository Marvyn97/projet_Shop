import express from "express";
import { getOrderDetail, getOrderDetailById } from "../controllers/orderDetail.controller.js";

const router = express.Router();

router.get("/", getOrderDetail);
router.get("/:id", getOrderDetailById);

export default router;