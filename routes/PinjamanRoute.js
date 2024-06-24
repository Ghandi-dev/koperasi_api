import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getPinjaman, getPinjamanByUserId } from "../controllers/PinjamanController.js";

router.get("/pinjaman", auth, getPinjaman);
router.get("/pinjaman_by_user_id", auth, getPinjamanByUserId);

export default router;
