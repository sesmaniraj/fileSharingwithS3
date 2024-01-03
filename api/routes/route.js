import express from "express";
import { getSignInUrl } from "../controllers/imageController.js";

const router = express.Router();

router.get("/image-url", getSignInUrl);

export default router;
