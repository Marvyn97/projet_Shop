import express from "express";
import { signUp, signIn } from "../controllers/auth.controller.js";
import { chekUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", signUp);
router.post("/login", chekUser ,signIn);
router.get("/logout", );

export default router;