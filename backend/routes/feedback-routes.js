import express from "express";
import { submitFeedback, getFeedbackByFutsalCourt } from "../controllers/feedback-controller.js";

const router = express.Router();

router.post("/", submitFeedback); // Submit feedback
router.get("/:courtId", getFeedbackByFutsalCourt); // Get feedback for a specific futsal court

export default router;
