import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getUserData, getUserDataById } from "../controllers/UserDataController.js";

router.get("/userdatas", auth, getUserData);
router.get("/userdataById", auth, getUserDataById);
export default router;
