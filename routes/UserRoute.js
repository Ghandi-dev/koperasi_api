import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getUser, changePassword } from "../controllers/UserController.js";

router.get("/users", auth, getUser);
router.put("/users/changepassword", auth, changePassword);
export default router;
