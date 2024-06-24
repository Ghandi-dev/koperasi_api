import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import UserRoute from "./routes/UserRoute.js";
import UserDataRoute from "./routes/UserDataRoute.js";
import PinjamanRoute from "./routes/PinjamanRoute.js";
import SimpananRoute from "./routes/SimpananRoute.js";
import AngsuranRoute from "./routes/AngsuranRoute.js";
import AuthRoute from "./routes/AuthRoute.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(AuthRoute);
app.use(UserRoute);
app.use(UserDataRoute);
app.use(PinjamanRoute);
app.use(SimpananRoute);
app.use(AngsuranRoute);

app.listen(3000, () => console.log("server up and running"));
