import { Router } from "express";

// services
import verifyToken from "../services/verifyToken";
import searchPerson from "../services/searchPerson";

const router = Router();

router.post("/", [verifyToken, searchPerson], (req, res) => {});

export default router;
