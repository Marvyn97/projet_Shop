import express from "express";
import { addProduct, getOneProduct, getProductAll, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/all", getProductAll);
router.get("/:id", getOneProduct);

router.post("/add", addProduct);

router.patch("/:id", updateProduct);

export default router;