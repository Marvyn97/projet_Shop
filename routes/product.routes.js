import express from "express";
import { getOneProduct, getProductAll } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/all", getProductAll);
router.get("/:id", getOneProduct);

export default router;