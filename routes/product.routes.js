import express from "express";
import { getProductAll } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/all", getProductAll);

export default router;