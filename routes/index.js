import express from "express";
import UserRoute from "./UserRoute.js";

const router = express.Router();

router.use('/users', UserRoute);

export default router;