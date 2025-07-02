import express from "express";
import {
  saveCardDetails,
  getCardsByUser,
} from "../controllers/card-controller.js";

const router = express.Router();

router.post("/", saveCardDetails); // Save card details
router.get("/user/:userId", getCardsByUser); // Get user's saved cards

export default router;
