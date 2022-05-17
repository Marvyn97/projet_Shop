import express from "express";
import { signUp, signIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", signUp);
router.post("/login", signIn);
router.get("/logout", );

export default router;