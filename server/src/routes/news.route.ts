import { Router } from "express";
import { generateReport } from "@/controllers/news.controller";

const router = Router();

router.post("/generate-report", generateReport);

export default router;
