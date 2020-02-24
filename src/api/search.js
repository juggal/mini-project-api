import { Router } from "express";

// services
import verifyToken from "../services/verifyToken";

const router = Router();

router.post("/", verifyToken, (req, res) => {});

export default router;
