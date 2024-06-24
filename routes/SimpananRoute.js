import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getSimpanan } from "../controllers/SimpananController.js";

router.get("/simpanan", auth, getSimpanan);

export default router;
