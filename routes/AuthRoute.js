import express from "express";
const router = express.Router();

import { loginUser } from "../controllers/AuthController.js";

router.post("/login", loginUser);

export default router;