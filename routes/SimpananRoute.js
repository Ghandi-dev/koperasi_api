import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getSimpanan, getSimpananByUserId } from "../controllers/SimpananController.js";

router.get("/simpanan", auth, getSimpanan);
router.get("/simpanan_by_user_id", auth, getSimpananByUserId);

export default router;
