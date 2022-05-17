import express from "express";
import { deleteProduct, deleteUser, deleteOrder } from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/deleteProduct/:id", deleteProduct);
router.get("deletOrder/:id", deleteOrder);
router.get("/deleteUser/:id", deleteUser);

export default router;