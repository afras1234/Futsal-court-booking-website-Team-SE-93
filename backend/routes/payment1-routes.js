import express from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentsByUser,
  updatePaymentStatus
} from "../controllers/payment-controller.js";

const router = express.Router();

router.post("/", createPayment); // Create payment
router.get("/", getAllPayments); // Admin view
router.get("/user/:userId", getPaymentsByUser); // User view
router.put("/:id", updatePaymentStatus); // Update payment status

export default router;
