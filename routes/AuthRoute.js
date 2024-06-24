import express from "express";
const router = express.Router();

import { loginUser, registration } from "../controllers/AuthController.js";

router.post("/login", loginUser);
router.post("/registration", registration);

export default router;
