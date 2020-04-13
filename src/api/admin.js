import { Router } from "express";

//model

//services
import uploadData from "../services/uploadData";

const router = Router();

router.post("/upload", uploadData, (req, res) => {
  res.json({ msg: "Data uploaded successfully" });
});

export default router;
