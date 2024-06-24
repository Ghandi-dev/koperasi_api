import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getAngsuran, getAngsuranByIdPinjaman } from "../controllers/AngsuranController.js";

router.get("/angsuran", auth, getAngsuran);
router.get("/angsuranbyidpinjaman", auth, getAngsuranByIdPinjaman);

export default router;
