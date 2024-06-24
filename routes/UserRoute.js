import express from "express";
const router = express.Router();
import auth from "../middleware/Auth.js";

import { getUser } from "../controllers/UserController.js";

router.get("/users", auth, getUser);

export default router;
