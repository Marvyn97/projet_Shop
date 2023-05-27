import express from "express";
import { getUserById, getUsers, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);

router.patch("/:id", updateUser);

export default router;