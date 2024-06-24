import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getAngsuran, getAngsuranByIdPinjaman, getSisaAngsuran } from "../controllers/AngsuranController.js";

router.get("/angsuran", auth, getAngsuran);
router.get("/angsuranbyidpinjaman", auth, getAngsuranByIdPinjaman);
router.get("/sisa_angsuran", auth, getSisaAngsuran);

export default router;
