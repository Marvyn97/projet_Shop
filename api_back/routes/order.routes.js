import express from "express";
import { getOrderAll, getOrderByUser } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/all", getOrderAll);
router.get("/:id", getOrderByUser);

export default router;