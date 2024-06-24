import express from 'express';
const router = express.Router();
import auth from '../middleware/Auth.js';

import { getUserData } from "../controllers/UserDataController.js";

router.get("/userdatas",auth, getUserData);

export default router;